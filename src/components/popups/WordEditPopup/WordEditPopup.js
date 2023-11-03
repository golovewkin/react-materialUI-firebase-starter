import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import VTextField from "../../../material/VTextField";
import { setFormState } from "../../../helpers/form.helper";
import VButton from "../../../material/VButton/VButton";
import { LogService } from "../../../services/LogService";
import "./style.scss";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import { WordDBService } from "../../../services/WordDBService";
import PicChanger from "../../utils/PicChanger/PicChanger";
import { PicService } from "../../../services/PicService";
import { commonConst } from "../../../constants/commonConst";
import MainContext from "../../../contexts/main.context";
import VSelect from "../../../material/VSelect";

const WordEditPopup = ({ open, onClose, word, onSuccess, mode }) => {
  const [state, setState] = useState(word);
  const [file, setFile] = useState(null);
  const { groups, onUpdateGroup } = React.useContext(MainContext);

  React.useEffect(() => {
    if (word) setState(word);
  }, [word]);

  const picOnChange = ({ base64, file }) => {
    try {
      setFormState("pic", base64, setState);
      setFile(file);
    } catch (e) {
      LogService.showAndLogError("picOnChange error", e);
    }
  };

  // todo get group from url
  // todo check on dublicates

  const submit = async () => {
    try {
      const newWord = { ...state };
      if (file) {
        newWord.pic = await PicService.savePic(file);
      }

      if (mode === commonConst.edit) {
        await WordDBService.editWord(newWord);
      } else {
        const group = groups.find(({ id }) => newWord.groupId === id);
        const newGroup = await WordDBService.createWord(newWord, group);
        onUpdateGroup(newGroup);
      }
      onSuccess(newWord);
      onClose();
    } catch (e) {
      LogService.showAndLogError("edit or create word error", e);
    }
  };

  if (!state) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{mode} word</DialogTitle>
      <DialogContent className="WordEditPopup">
        <PicChanger
          alt="word-pic"
          pic={state.pic}
          onChange={(value) => picOnChange(value)}
        />
        <VTextField
          onChange={(value) => setFormState("word", value, setState)}
          value={state.word}
          error={!state.word}
          type="text"
          label="word"
        />
        <VTextField
          onChange={(value) => setFormState("translation", value, setState)}
          value={state.translation}
          error={!state.translation}
          type="text"
          label="translation"
        />
        <VSelect
          value={state.groupId}
          values={groups}
          onChange={(value) => setFormState("groupId", value, setState)}
        />
        <VTextField
          onChange={(value) => setFormState("description", value, setState)}
          value={state.description}
          type="text"
          label="description"
        />
        <VTextField
          onChange={(value) => setFormState("example", value, setState)}
          value={state.example}
          type="text"
          label="example"
        />
      </DialogContent>
      <DialogActions>
        <VButton onClick={onClose}>Cancel</VButton>
        <VButton disabled={!state.word || !state.groupId} onClick={submit}>
          Submit
        </VButton>
      </DialogActions>
    </Dialog>
  );
};

WordEditPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  word: PropTypes.object,
  mode: PropTypes.string,
};

export default withErrorBoundary(WordEditPopup);

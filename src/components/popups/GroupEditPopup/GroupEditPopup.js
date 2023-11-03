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
import { GroupDBService } from "../../../services/GroupDBService";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import PicChanger from "../../utils/PicChanger/PicChanger";
import { PicService } from "../../../services/PicService";
import { commonConst } from "../../../constants/commonConst";

const GroupEditPopup = ({ open, onClose, group, onSuccess, mode }) => {
  const [state, setState] = useState(group);
  const [file, setFile] = useState(null);

  React.useEffect(() => {
    if (group) setState(group);
  }, [group]);

  const picOnChange = ({ base64, file }) => {
    try {
      setFormState("pic", base64, setState);
      setFile(file);
    } catch (e) {
      LogService.showAndLogError("picOnChange error", e);
    }
  };

  const submit = async () => {
    try {
      onClose();
      const newGroup = { ...state };
      if (file) {
        newGroup.pic = await PicService.savePic(file);
      }

      if (mode === commonConst.create) {
        await GroupDBService.createGroup(newGroup);
      } else {
        await GroupDBService.editGroup(newGroup);
      }
      onSuccess(newGroup);
    } catch (e) {
      LogService.showAndLogError("edit or create group error", e);
    }
  };

  if (!state) return null;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{mode} group</DialogTitle>
      <DialogContent className="GroupEditPopup">
        <PicChanger
          alt="group-pic"
          pic={state.pic}
          onChange={(value) => picOnChange(value)}
        />
        <VTextField
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          error={!state.name}
          type="text"
          label="name"
        />
        <VTextField
          onChange={(value) => setFormState("description", value, setState)}
          value={state.description}
          type="text"
          label="description"
        />
      </DialogContent>
      <DialogActions>
        <VButton onClick={onClose}>Cancel</VButton>
        <VButton disabled={!state.name} onClick={submit}>
          Submit
        </VButton>
      </DialogActions>
    </Dialog>
  );
};

GroupEditPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  group: PropTypes.object,
  mode: PropTypes.string,
};

export default withErrorBoundary(GroupEditPopup);

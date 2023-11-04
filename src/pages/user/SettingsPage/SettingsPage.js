import React, { useState } from "react";
import "./style.scss";
import Button from "../../../common-components/Button/Button";
import MainContext from "../../../contexts/main.context";
import TextField from "../../../common-components/TextField";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";
import PicChanger from "../../../components/utils/PicChanger/PicChanger";
import { UserDBService } from "../../../services/UserDBService";
import { PicService } from "../../../services/PicService";

const SettingsPage = () => {
  const { user, updateUser, showSnack } = React.useContext(MainContext);
  const [state, setState] = useState({ ...user });

  const submit = async (newUser) => {
    // try {
    //   const user = { ...newUser };
    //   if (file) {
    //     user.pic = await PicService.savePic(file);
    //   }
    //   await UserDBService.updateUser(newUser.id, user);
    //   updateUser(user);
    //   showSnack("Success!");
    // } catch (e) {
    //   LogService.showAndLogError("save user error", e);
    // }
  };

  return (
    <div className="SettingsPage">
      <div className="SettingsPage__title">Edit Account Data</div>
      <div className="SettingsPage__wrapper">
        <TextField
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="name"
          error={!state.name}
          label="name"
        />
        <Button disabled={!state.name} onClick={() => submit(state)}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default withErrorBoundary(SettingsPage);

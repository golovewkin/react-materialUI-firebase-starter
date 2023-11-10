import React, { useState } from "react";
import "./style.scss";
import ProjectButton from "../../../common-components/Button/ProjectButton";
import MainContext from "../../../contexts/main.context";
import ProjectTextField from "../../../common-components/ProjectTextField";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";

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
        <ProjectTextField
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="name"
          error={!state.name}
          label="name"
        />
        <ProjectButton disabled={!state.name} onClick={() => submit(state)}>
          Save
        </ProjectButton>
      </div>
    </div>
  );
};

export default withErrorBoundary(SettingsPage);

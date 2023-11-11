import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import MainContext from "../../../contexts/main.context";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";

const SettingsPage = () => {
  const { user } = React.useContext(MainContext);
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
        <TextFieldComponent
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="name"
          error={!state.name}
          label="name"
        />
        <ButtonComponent disabled={!state.name} onClick={() => submit(state)}>
          Save
        </ButtonComponent>
      </div>
    </div>
  );
};

export default withErrorBoundary(SettingsPage);

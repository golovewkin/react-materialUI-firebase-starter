import React from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { useAuth } from "../../../providers/AuthProvider";
import { UserModel } from "../../../models/UserModel";
import { LogService } from "../../../services/LogService";
import { useShowError } from "../../../providers/ShowErrorProvider";
import { useSnack } from "../../../providers/SnackProvider";

const SettingsPage = () => {
  const { user, setUser } = useAuth();
  const showError = useShowError();
  const showSnack = useSnack();
  const [state, setState] = React.useState(user.copy());
  const submit = React.useCallback(
    async (newUser) => {
      try {
        const userModel = new UserModel(newUser);
        await userModel.update();
        setUser(userModel);
        showSnack("Done!");
      } catch (e) {
        LogService.log("error", e);
        return showError("update user error", e);
      }
    },
    [showError, setUser, showSnack],
  );

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

export default SettingsPage;

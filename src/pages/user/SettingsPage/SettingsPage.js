import React from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";
import { useAuth } from "../../../contexts/AuthProvider";
import { UserModel } from "../../../models/UserModel";
import { LogService } from "../../../services/LogService";
import { useLogError } from "../../../contexts/LogErrorProvider";

const SettingsPage = () => {
  const { user, setUser } = useAuth();
  const showError = useLogError();
  const [state, setState] = React.useState(user.copy());

  const submit = React.useCallback(
    async (newUser) => {
      try {
        const userModel = new UserModel(newUser);
        await userModel.update();
        setUser(userModel);
      } catch (e) {
        LogService.log("error", e);
        return showError("update user error", e);
      }
    },
    [showError, setUser],
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

export default withErrorBoundary(SettingsPage);

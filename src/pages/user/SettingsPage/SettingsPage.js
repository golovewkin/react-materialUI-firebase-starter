import React, { useCallback } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { useAuth } from "../../../providers/AuthProvider";
import { UserModel } from "../../../models/UserModel";
import useSubmit from "../../../components/hooks/useSubmit";

const SettingsPage = () => {
  const { user, setUser } = useAuth();
  const [state, setState] = React.useState(user.copy());

  const getData = useCallback(async (newUser) => {
    const userModel = new UserModel(newUser);
    await userModel.update();
    setUser(userModel);
  }, []);

  const { loading, submit } = useSubmit({
    getData,
    getDataParams: state,
    successMessage: "Done!",
  });

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
        <ButtonComponent
          disabled={!state.name}
          loading={loading}
          onClick={submit}
        >
          Save
        </ButtonComponent>
      </div>
    </div>
  );
};

export default SettingsPage;

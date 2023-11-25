import React, { useCallback } from "react";
import ButtonComponent from "../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../helpers/form.helper";
import { useAuth } from "../../providers/AuthProvider";
import { UserModel } from "../../models/UserModel";
import useSubmit from "../../components/hooks/useSubmit";
import FormComponent from "../../components/utils/FormComponent";
import { COMMON } from "../../constants/COMMON";

const SettingsPage = () => {
  const { user, setUser } = useAuth();
  const [state, setState] = React.useState(user.copy());

  const sendRequest = useCallback(
    async (newUser) => {
      const userModel = new UserModel(newUser);
      setUser(userModel);
      await userModel.update();
    },
    [setUser],
  );

  const { loading, submit } = useSubmit({
    sendRequest,
  });

  return (
    <div className="App-page">
      <div className="App-page__title">Edit Account Data</div>
      <FormComponent
        className="App-page__wrapper"
        onSubmit={() => submit(state)}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="name"
          error={!state.name}
          label="name"
        />
        <ButtonComponent disabled={!state.name} loading={loading} type="submit">
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
      </FormComponent>
    </div>
  );
};

export default SettingsPage;

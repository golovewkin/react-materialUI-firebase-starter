import React, { useState } from "react";
import ButtonComponent from "../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../components/library-based-components/TextFieldComponent";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent";
import { PUBLIC_URLS } from "../../constants/URLS";
import { validEmail } from "../../helpers/validator.helper";
import useSubmit from "../../components/hooks/useSubmit";
import { COMMON } from "../../constants/COMMON";
import { setFormState } from "../../helpers/form.helper";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/utils/FormComponent";
import SecurityService from "../../services/SecurityService";
import { UserModel } from "../../models/UserModel";

const ResetPassPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
  });

  const { loading, submit } = useSubmit({
    sendRequest: async (email) => {
      SecurityService.checkIfUserCanSendRequest();
      await UserModel.resetPass(email);
      navigate(PUBLIC_URLS.HOME);
    },
    successMessage: "Request was sent!",
  });

  const isDisabled = React.useCallback((email) => {
    if (!validEmail(email)) return true;
    return false;
  }, []);

  return (
    <div className="App-page">
      <div className="App-page__title">Send a request to get the access</div>
      <FormComponent
        className="App-page__wrapper"
        onSubmit={() => submit(state.email)}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <ButtonComponent
          loading={loading}
          disabled={isDisabled(state.email)}
          type="submit"
        >
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
        <div className="App-page__links">
          <LinkComponent to={PUBLIC_URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default ResetPassPage;

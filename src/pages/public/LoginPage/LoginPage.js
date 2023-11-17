import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { URLS } from "../../../constants/URLS";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import { useAuth } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useSubmit from "../../../components/hooks/useSubmit";
import FormComponent from "../../../components/utils/FormComponent";
import { COMMON } from "../../../constants/COMMON";

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const sendRequest = useCallback(
    async (params) => {
      await auth.signin(params);
      navigate(URLS.HOME);
    },
    [auth, navigate],
  );

  const { loading, submit } = useSubmit({
    sendRequest,
  });

  const isDisabled = useCallback((state) => {
    if (!validEmail(state.email)) return true;
    if (!validPassword(state.password)) return true;
    return false;
  }, []);

  return (
    <div className="LoginPage">
      <div className="LoginPage__title">Sign in</div>
      <FormComponent
        className="LoginPage__wrapper"
        onSubmit={() => submit(state)}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="password"
          error={!validPassword(state.password)}
        />
        <ButtonComponent
          type="submit"
          loading={loading}
          disabled={isDisabled(state)}
        >
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
        <div className="LoginPage__links">
          <LinkComponent to={URLS.RESET_PASS} children="Forgot password?" />
          <LinkComponent to={URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default LoginPage;

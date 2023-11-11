import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { urlsConst } from "../../../constants/urlsConst";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = useCallback(
    async (state) => {
      await auth.signin(state);
      navigate(urlsConst.home);
    },
    [auth, navigate],
  );

  const isDisabled = useCallback((state) => {
    if (!validEmail(state.email)) return true;
    if (!validPassword(state.password)) return true;
    return false;
  }, []);

  return (
    <div className="LoginPage">
      <div className="LoginPage__title">Sign in</div>
      <div className="LoginPage__wrapper">
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
          disabled={isDisabled(state)}
          onClick={() => login(state)}
        >
          Log in
        </ButtonComponent>
        <div className="LoginPage__links">
          <LinkComponent to={urlsConst.resetPass} children="Forgot password?" />
          <LinkComponent to={urlsConst.createAccount} children="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

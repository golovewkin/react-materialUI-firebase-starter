import React, { useState } from "react";
import { AuthService } from "../../../services/AuthService";
import "./style.scss";
import ButtonComponent from "../../../common-components/Button/ButtonComponent";
import { commonConst } from "../../../constants/commonConst";
import TextFieldComponent from "../../../common-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { urlsConst } from "../../../constants/urlsConst";
import LinkComponent from "../../../common-components/Link/LinkComponent";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../contexts/AuthProvider";

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  let from = location.state?.from?.pathname || "/";

  const login = () => {
    console.log('TODO login');
    // AuthService.logIn(state.email, state.password);
    //     auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      // navigate(from, { replace: true });
    // });
  };

  const isDisabled = (state) => {
    try {
      if (!validEmail(state.email)) return true;
      if (!validPassword(state.password)) return true;
      return false;
    } catch (e) {
      LogService.logError("isDisabled error", e);
      return true;
    }
  };

  // if (user) {
  //   return <span>{commonConst.error}</span>;
  // }

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
        <ButtonComponent disabled={isDisabled(state)} onClick={login}>
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

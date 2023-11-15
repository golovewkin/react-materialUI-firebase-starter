import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { URLS } from "../../../constants/URLS";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import { useAuth } from "../../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import * as emailjs from "@emailjs/browser";

const LoginPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const login = useCallback(
    async (event, state) => {
      event.preventDefault();
      await auth.signin(state);
      const templateParams = {
        to_name: "xyz",
        from_name: "abc",
        message_html: "Please Find out the attached file",
      };
      emailjs
        .send(
          "service_bxz13fs",
          "template_67hirif",
          templateParams,
          "T3K0W3gQbolXImQAq",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      navigate(URLS.home);
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
      <form
        className="LoginPage__wrapper"
        onSubmit={(event) => login(event, state)}
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
        <ButtonComponent type="submit" disabled={isDisabled(state)}>
          Log in
        </ButtonComponent>
        <div className="LoginPage__links">
          <LinkComponent to={URLS.resetPass} children="Forgot password?" />
          <LinkComponent to={URLS.home} children="Home" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

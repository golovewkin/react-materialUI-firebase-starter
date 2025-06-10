import React, { useCallback, useMemo } from "react";
import { PUBLIC_URLS } from "../../constants/URLS.js";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent.js";
import { useAuth } from "../../providers/AuthProvider.js";
import FormComponent from "../../components/library-based-components/FormComponent.js";

const LoginPage = () => {
  const auth = useAuth();
  const sendRequest = useCallback(
    async (params) => {
      await auth.signin(params);
    },
    [auth],
  );

  const configState = useMemo(() => ({ email: "", password: "" }), []);
  return (
    <div className="App-page">
      <div className="App-page__title">Sign in</div>
      <FormComponent configState={configState} sendRequest={sendRequest}>
        <div className="App-page__links">
          <LinkComponent
            to={PUBLIC_URLS.RESET_PASS}
            children="Forgot password?"
          />
          <LinkComponent to={PUBLIC_URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { LogService } from "../../../services/LogService";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail } from "../../../helpers/validator.helper";

const ResetPassPage = () => {
  const [email, setEmail] = useState("");

  const submit = () => {
    try {
      console.log("submit");
    } catch (e) {
      LogService.log("send reset password error", e);
    }
  };

  //   const { loading, submit } = useSubmit({
  //   sendRequest: () => sendRequest(state),
  // });

  const isDisabled = (email) => {
    try {
      if (!validEmail(email)) return true;
      return false;
    } catch (e) {
      LogService.logError("isDisabled error", e);
      return true;
    }
  };

  return (
    <div className="ResetPassPage">
      <div className="ResetPassPage__title">Reset your password</div>
      <div className="ResetPassPage__wrapper">
        <TextFieldComponent
          onChange={setEmail}
          value={email}
          type="email"
          label="email"
          error={!validEmail(email)}
        />
        <ButtonComponent disabled={isDisabled(email)} onClick={submit}>
          Send
        </ButtonComponent>
        <div className="ResetPassPage__links">
          <LinkComponent to={URLS.LOGIN} children="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;

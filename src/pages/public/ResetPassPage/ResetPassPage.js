import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import MainContext from "../../../contexts/main.context";
import { commonConst } from "../../../constants/commonConst";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { LogService } from "../../../services/LogService";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { urlsConst } from "../../../constants/urlsConst";
import { validEmail } from "../../../helpers/validator.helper";

const ResetPassPage = () => {
  const { user } = React.useContext(MainContext);
  const [email, setEmail] = useState("");

  const submit = () => {
    try {
      console.log("submit");
    } catch (e) {
      LogService.showAndLogError("send reset password error", e);
    }
  };

  const isDisabled = (email) => {
    try {
      if (!validEmail(email)) return true;
      return false;
    } catch (e) {
      LogService.logError("isDisabled error", e);
      return true;
    }
  };

  if (user) {
    return <span>{commonConst.error}</span>;
  }

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
          <LinkComponent to={urlsConst.login} children="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassPage;

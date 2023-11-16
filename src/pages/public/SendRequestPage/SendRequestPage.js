import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { LogService } from "../../../services/LogService";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import { useShowError } from "../../../contexts/ShowErrorProvider";
import { doc } from "firebase/firestore";
import { DBService } from "../../../services/DBService";

const SendRequestPage = () => {
  const showError = useShowError();
  const [email, setEmail] = useState("");

  const submit = async () => {
    try {
      await InquiryModel.create({ email });
    } catch (e) {
      showError("send request error", e);
      LogService.log("send request error", e);
    }
  };

  const isDisabled = (email) => {
    if (!validEmail(email)) return true;
    return false;
  };

  return (
    <div className="ResetPassPage">
      <div className="ResetPassPage__title">
        Send a request to get the access
      </div>
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
          <LinkComponent to={URLS.HOME} children="Return to home" />
        </div>
      </div>
    </div>
  );
};

export default SendRequestPage;

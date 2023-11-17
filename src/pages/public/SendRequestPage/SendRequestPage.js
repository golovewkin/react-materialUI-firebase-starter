import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import useSubmit from "../../../components/hoc/useSubmit";

const SendRequestPage = () => {
  const [email, setEmail] = useState("");
  const { loading, submit } = useSubmit({
    getData: InquiryModel.create,
    getDataParams: { email },
    successMessage: "Request was sent! Please wait till admin accepts 🤗",
  });

  const isDisabled = React.useCallback((email) => {
    if (!validEmail(email)) return true;
    return false;
  }, []);

  return (
    <div className="SendRequestPage">
      <div className="SendRequestPage__title">
        Send a request to get the access
      </div>
      <div className="SendRequestPage__wrapper">
        <TextFieldComponent
          onChange={setEmail}
          value={email}
          type="email"
          label="email"
          error={!validEmail(email)}
        />
        <ButtonComponent
          loading={loading}
          disabled={isDisabled(email)}
          onClick={submit}
        >
          Send
        </ButtonComponent>
        <div className="SendRequestPage__links">
          <LinkComponent to={URLS.HOME} children="Return to home" />
        </div>
      </div>
    </div>
  );
};

export default SendRequestPage;

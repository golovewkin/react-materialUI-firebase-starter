import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { LogService } from "../../../services/LogService";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import { useShowError } from "../../../providers/ShowErrorProvider";
import { useSnack } from "../../../providers/SnackProvider";

const SendRequestPage = () => {
  const showError = useShowError();
  const showShack = useSnack();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = React.useCallback(
    async (email) => {
      try {
        setLoading(true);
        await InquiryModel.create({ email });
        showShack("Request was sent! Please wait till admin accepts 🤗");
      } catch (e) {
        const error = "Send request error";
        showError(error, e);
        LogService.log(error, e);
      } finally {
        setLoading(false);
      }
    },
    [showShack, showError, setLoading],
  );

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
          onClick={() => submit(email)}
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

import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { URLS } from "../../../constants/URLS";
import { validEmail } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import useSubmit from "../../../components/hooks/useSubmit";
import { BrowserStorageService } from "../../../services/BrowserStorageService";
import { COMMON } from "../../../constants/COMMON";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../../components/utils/FormComponent";

const AcceptRequestPage = () => {
  const navigate = useNavigate();
  const { id: inquiryId } = useParams();
  const [email, setEmail] = useState("");

  const { loading, submit } = useSubmit({
    sendRequest: async (params) => {
      const previousRequest = BrowserStorageService.getData(
        COMMON.APPROVAL_SENT,
      );
      if (previousRequest) {
        throw new Error("Approval was already sent!");
      }
      await InquiryModel.acceptByInquiryId(params.email, params.inquiryId);

      BrowserStorageService.setData(COMMON.APPROVAL_SENT, "sent");
      navigate(URLS.HOME);
    },
    successMessage: "Success 🥳! Wait, please, we will send you a link",
  });

  const isDisabled = useCallback((email) => {
    if (!validEmail(email)) return true;
    return false;
  }, []);

  return (
    <div className="AcceptRequestPage">
      <div className="AcceptRequestPage__title">
        Accept the invite and setup your password
      </div>
      <FormComponent
        className="AcceptRequestPage__wrapper"
        onSubmit={() => submit({ email, inquiryId })}
      >
        <TextFieldComponent
          onChange={(value) => setEmail(value)}
          value={email}
          type="email"
          label="your email"
          error={!validEmail(email)}
        />
        <ButtonComponent
          loading={loading}
          disabled={isDisabled(email)}
          type="submit"
        >
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
        <div className="AcceptRequestPage__links">
          <LinkComponent to={URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default AcceptRequestPage;

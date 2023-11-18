import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";
import { PUBLIC_URLS } from "../../../constants/USER_URLS";
import { validEmail } from "../../../helpers/validator.helper";
import { InquiryModel } from "../../../models/InquiryModel";
import useSubmit from "../../../components/hooks/useSubmit";
import { COMMON } from "../../../constants/COMMON";
import { setFormState } from "../../../helpers/form.helper";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/utils/FormComponent";
import SecurityService from "../../../services/SecurityService";
import { INQUIRY_TYPES } from "../../../constants/INQUIRY";

const SendRequestPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    message: "",
  });

  const { loading, submit } = useSubmit({
    sendRequest: async (params) => {
      SecurityService.checkIfUserCanSendRequest();
      await InquiryModel.create({ ...params, type: INQUIRY_TYPES.REQUEST });
      navigate(PUBLIC_URLS.HOME);
    },
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
      <FormComponent
        className="SendRequestPage__wrapper"
        onSubmit={() => submit(state)}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("message", value, setState)}
          value={state.message}
          type="text"
          label="message"
          error={!state.message}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <ButtonComponent
          loading={loading}
          disabled={isDisabled(state.email)}
          type="submit"
        >
          {COMMON.SUBMIT_WITH_ENTER_MESSAGE}
        </ButtonComponent>
        <div className="SendRequestPage__links">
          <LinkComponent to={PUBLIC_URLS.HOME} children="Return to home" />
        </div>
      </FormComponent>
    </div>
  );
};

export default SendRequestPage;

import React, { useCallback, useMemo } from "react";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent";
import { PUBLIC_URLS } from "../../constants/URLS";
import { InquiryModel } from "../../models/InquiryModel";
import { useNavigate } from "react-router-dom";
import SecurityService from "../../services/SecurityService";
import { INQUIRY_TYPES } from "../../constants/INQUIRY";
import FormComponent from "../../components/library-based-components/FormComponent";
import { useShowCommonPopup } from "../../providers/ShowCommonPopupProvider";

const SendRequestPage = () => {
  const navigate = useNavigate();
  const showMessage = useShowCommonPopup();

  const sendRequest = useCallback(
    async (params) => {
      SecurityService.checkIfUserCanSendRequest();
      await InquiryModel.create({ ...params, type: INQUIRY_TYPES.REQUEST });
      showMessage({
        title: "Success!",
        content: "Request was sent! Please wait till admin accepts 🤗",
      });
      navigate(PUBLIC_URLS.HOME);
    },
    [navigate, showMessage],
  );

  const configState = useMemo(() => ({ email: "" }), []);
  return (
    <div className="App-page">
      <div className="App-page__title">Send a request to get the access</div>
      <FormComponent
        configState={configState}
        sendRequest={sendRequest}
        children={
          <div className="App-page__links">
            <LinkComponent to={PUBLIC_URLS.HOME} children="Return to home" />
          </div>
        }
      />
    </div>
  );
};

export default SendRequestPage;

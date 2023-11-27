import React, { useCallback, useMemo } from "react";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent";
import { PUBLIC_URLS } from "../../constants/URLS";
import { useNavigate } from "react-router-dom";
import SecurityService from "../../services/SecurityService";
import { UserModel } from "../../models/UserModel";
import { useShowCommonPopup } from "../../providers/ShowCommonPopupProvider";
import FormComponent from "../../components/library-based-components/FormComponent";

const ResetPassPage = () => {
  const navigate = useNavigate();
  const showMessage = useShowCommonPopup();

  const sendRequest = useCallback(
    async ({ email }) => {
      SecurityService.checkIfUserCanSendRequest();
      await UserModel.resetPass(email);
      navigate(PUBLIC_URLS.HOME);
      showMessage({
        title: "Success!",
        content: "Request was sent!",
      });
      navigate(PUBLIC_URLS.HOME);
    },
    [navigate, showMessage],
  );

  const configState = useMemo(() => ({ email: "" }), []);
  return (
    <div className="App-page">
      <div className="App-page__title">
        Send a request to reset your password
      </div>
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

export default ResetPassPage;

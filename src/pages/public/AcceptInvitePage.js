import React, { useCallback, useMemo } from "react";
import { UserModel } from "../../models/UserModel.js";
import { useParams } from "react-router-dom";
import { InquiryModel } from "../../models/InquiryModel.js";
import { PUBLIC_URLS } from "../../constants/URLS.js";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent.js";
import FormComponent from "../../components/library-based-components/FormComponent.js";

const AcceptInvitePage = () => {
  const params = useParams();

  const sendRequest = useCallback(
    async (state) => {
      await InquiryModel.checkInviteByInquiryId(state.email, params.id);
      await UserModel.createByEmailAndPassword(state);
    },
    [params.id],
  );

  const configState = useMemo(() => ({ email: "", password: "" }), []);
  return (
    <div className="App-page">
      <div className="App-page__title">
        Accept an invite and create a user account
        <br />
        <LinkComponent
          to={PUBLIC_URLS.HOME}
          children="Return to home if you are not sure 🤔"
        />
      </div>
      <FormComponent
        footerButtonLabel="Create Account"
        configState={configState}
        sendRequest={sendRequest}
      />
    </div>
  );
};

export default AcceptInvitePage;

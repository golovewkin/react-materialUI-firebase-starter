import React, { useCallback, useMemo } from "react";
import { InquiryModel } from "../../../models/InquiryModel.js";
import { INQUIRY_TYPES } from "../../../constants/INQUIRY.js";
import { getInviteUrl } from "../../../helpers/util.helper.js";
import ContentCopyIconComponent from "../../../components/library-based-components/icons/ContentCopyIconComponent.js";
import { useShowCommonPopup } from "../../../providers/ShowCommonPopupProvider.js";
import FormComponent from "../../../components/library-based-components/FormComponent.js";

const CreateInvite = () => {
  const showMessage = useShowCommonPopup();

  const sendRequest = useCallback(
    async ({ email }) => {
      const inquiry = await InquiryModel.create({
        message: "Created by admin",
        email,
        type: INQUIRY_TYPES.INVITE,
      });
      const componentToShow = (
        <div>
          {getInviteUrl(inquiry)}{" "}
          <ContentCopyIconComponent copy={getInviteUrl(inquiry)} />
        </div>
      );
      showMessage({
        title: "Here is the link to send",
        content: componentToShow,
      });
    },
    [showMessage],
  );

  const configState = useMemo(() => ({ email: "" }), []);
  return (
    <div className="App-page">
      <div className="App-page__title">Create an invite</div>
      <ol>
        <li>Create an invite</li>
        <li>It gives you a link</li>
        <li>Give this link to the user</li>
        <li>Remove this Inquiry on the Inquiries page</li>
      </ol>
      <FormComponent
        configState={configState}
        sendRequest={sendRequest}
        resetAfterSubmit={true}
      />
    </div>
  );
};

export default CreateInvite;

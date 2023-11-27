import React, { useCallback, useState } from "react";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { validEmail } from "../../../helpers/validator.helper";
import FormComponent from "../../../components/utils/FormComponent";
import useSubmit from "../../../components/hooks/useSubmit";
import { InquiryModel } from "../../../models/InquiryModel";
import { INQUIRY_TYPES } from "../../../constants/INQUIRY";
import { getInviteUrl } from "../../../helpers/util.helper";
import ContentCopyIconComponent from "../../../components/library-based-components/icons/ContentCopyIconComponent";
import { useShowCommonPopup } from "../../../providers/ShowCommonPopupProvider";

const CreateInvite = () => {
  const [email, setEmail] = useState("");
  const showMessage = useShowCommonPopup();

  const sendRequest = useCallback(
    async (email) => {
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
      setEmail("");
    },
    [setEmail, showMessage],
  );

  const { loading, submit } = useSubmit({
    sendRequest,
  });

  const isDisabled = useCallback((email) => {
    if (!validEmail(email)) return true;
    return false;
  }, []);

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
        className="App-page__wrapper"
        onSubmit={() => submit(email)}
      >
        <TextFieldComponent
          onChange={(value) => setEmail(value)}
          value={email}
          type="email"
          label="email"
          error={!validEmail(email)}
        />
        <ButtonComponent disabled={isDisabled(email)} loading={loading}>
          Create Invite
        </ButtonComponent>
      </FormComponent>
    </div>
  );
};

export default CreateInvite;

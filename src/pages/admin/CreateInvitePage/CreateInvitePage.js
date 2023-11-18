import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { validEmail } from "../../../helpers/validator.helper";
import FormComponent from "../../../components/utils/FormComponent";
import useSubmit from "../../../components/hooks/useSubmit";
import { InquiryModel } from "../../../models/InquiryModel";
import { INQUIRY_TYPES } from "../../../constants/INQUIRY";
import { useShowMessage } from "../../../providers/ShowMessageProvider";
import { getInviteUrl } from "../../../helpers/util.helper";
import ContentCopyIconComponent from "../../../components/library-based-components/icons/ContentCopyIconComponent";

const CreateInvitePage = () => {
  const [email, setEmail] = useState("");
  const showMessage = useShowMessage();

  const sendRequest = useCallback(
    async (email) => {
      const inquiry = await InquiryModel.create({
        email,
        type: INQUIRY_TYPES.INVITE,
      });
      const url = getInviteUrl(inquiry);
      const componentToShow = (
        <div>
          {getInviteUrl(inquiry)}{" "}
          <ContentCopyIconComponent copy={getInviteUrl(inquiry)} />
        </div>
      );
      showMessage("Here is the link to send", componentToShow);
      setEmail("");
    },
    [setEmail],
  );

  const { loading, submit } = useSubmit({
    sendRequest,
  });

  const isDisabled = useCallback((email) => {
    if (!validEmail(email)) return true;
    return false;
  }, []);

  return (
    <div className="CreateInvitePage">
      <div className="CreateInvitePage__title">Create an invite</div>
      <ol>
        <li>Create an invite</li>
        <li>It gives you a link</li>
        <li>Give this link to the user</li>
        <li>Remove this Inquiry on the Inquiries page</li>
      </ol>
      <FormComponent
        className="CreateInvitePage__wrapper"
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

export default CreateInvitePage;

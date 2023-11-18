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

const CreateInvitePage = () => {
  const [email, setEmail] = useState("");
  const showError = useShowMessage();

  const sendRequest = useCallback(
    async (email) => {
      // await InquiryModel.create({ email, type: INQUIRY_TYPES.INVITE });
      // TODO show a link
      throw "444";
      showError("fdfd", <b>aaaa</b>);
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

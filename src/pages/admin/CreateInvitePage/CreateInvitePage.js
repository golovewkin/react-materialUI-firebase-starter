import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { validEmail } from "../../../helpers/validator.helper";
import FormComponent from "../../../components/utils/FormComponent";
import { UserModel } from "../../../models/UserModel";
import useSubmit from "../../../components/hooks/useSubmit";

const CreateInvitePage = () => {
  const [email, setEmail] = useState("");

  const sendRequest = useCallback(
    async (email) => {
      const credentials = await UserModel.createByEmail(email);
      console.log(credentials);
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
          Create Account
        </ButtonComponent>
      </FormComponent>
    </div>
  );
};

export default CreateInvitePage;

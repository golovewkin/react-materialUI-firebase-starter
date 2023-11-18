import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { validEmail } from "../../../helpers/validator.helper";
import FormComponent from "../../../components/utils/FormComponent";
import { UserModel } from "../../../models/UserModel";
import useSubmit from "../../../components/hooks/useSubmit";

const CreateAccountPage = () => {
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
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__title">
        Create a user account
        <br />
        (You will login as this user, but this is how firebase works 🙄)
        <br />
        Just sign out and sign in as an admin again
      </div>
      <FormComponent
        className="CreateAccountPage__wrapper"
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

export default CreateAccountPage;

import React, { useCallback, useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { validEmail, validPassword } from "../../../helpers/validator.helper";
import FormComponent from "../../../components/utils/FormComponent";
import { UserModel } from "../../../models/UserModel";
import useSubmit from "../../../components/hooks/useSubmit";
import { setFormState } from "../../../helpers/form.helper";
import { useParams } from "react-router-dom";

const AcceptInvitePage = () => {
  const params = useParams();
  console.log(params);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const sendRequest = useCallback(
    async (state) => {
      await UserModel.createByEmail(state, params.id);
    },
    [params.id],
  );

  const { loading, submit } = useSubmit({
    sendRequest,
  });

  const isDisabled = useCallback((state) => {
    if (!validEmail(state.email)) return true;
    if (!validPassword(state.password)) return true;
    return false;
  }, []);

  return (
    <div className="AcceptInvitePage">
      <div className="AcceptInvitePage__title">
        Accept an invite and create a user account
      </div>
      <FormComponent
        className="AcceptInvitePage__wrapper"
        onSubmit={() => submit(state)}
      >
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="password"
          error={!validPassword(state.password)}
        />
        <ButtonComponent disabled={isDisabled(state)} loading={loading}>
          Create Account
        </ButtonComponent>
      </FormComponent>
    </div>
  );
};

export default AcceptInvitePage;

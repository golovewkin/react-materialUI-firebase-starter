import React, { useState } from "react";
import "./style.scss";
import ButtonComponent from "../../../components/library-based-components/ButtonComponent/ButtonComponent";
import TextFieldComponent from "../../../components/library-based-components/TextFieldComponent";
import { setFormState } from "../../../helpers/form.helper";
import { LogService } from "../../../services/LogService";
import { validEmail } from "../../../helpers/validator.helper";
import { UserModel } from "../../../models/UserModel";

const CreateAccountPage = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
  });

  const createAccount = () => {
    try {
      UserModel.create(state);
    } catch (e) {
      LogService.log("error", e);
    }
  };

  const isDisabled = (state) => {
    if (!validEmail(state.email)) return true;
  };

  return (
    <div className="CreateAccountPage">
      <div className="CreateAccountPage__title">Create account</div>
      <div className="CreateAccountPage__wrapper">
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
        <TextFieldComponent
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="text"
          label="name"
          error={!state.name}
        />
        <ButtonComponent disabled={isDisabled(state)} onClick={createAccount}>
          Create Account
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CreateAccountPage;

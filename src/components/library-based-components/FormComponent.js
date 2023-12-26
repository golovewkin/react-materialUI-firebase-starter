import React, { useCallback, useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { validEmail, validPassword } from "../../helpers/validator.helper";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { setFormState } from "../../helpers/form.helper";
import useSubmit from "../../hooks/useSubmit";

const FormComponent = ({
  className = "App-page__wrapper",
  sendRequest,
  configState,
  children,
  resetAfterSubmit = false,
  footerButtonLabel = "Submit",
}) => {
  const [state, setState] = useState(configState);
  const { loading, submit } = useSubmit({
    sendRequest: async () => {
      if (resetAfterSubmit) {
        setState(configState);
      }
      await sendRequest(state);
    },
  });

  const isDisabled = useCallback((state) => {
    if (state.email !== undefined && !validEmail(state.email)) {
      return true;
    }
    if (state.password !== undefined && !validPassword(state.password)) {
      return true;
    }

    return false;
  }, []);

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      {state.email !== undefined && (
        <TextFieldComponent
          onChange={(value) => setFormState("email", value, setState)}
          value={state.email}
          type="email"
          label="email"
          error={!validEmail(state.email)}
        />
      )}
      {state.password !== undefined && (
        <TextFieldComponent
          onChange={(value) => setFormState("password", value, setState)}
          value={state.password}
          type="password"
          label="password"
          error={!validPassword(state.password)}
        />
      )}
      {state.name !== undefined && (
        <TextFieldComponent
          onChange={(value) => setFormState("name", value, setState)}
          value={state.name}
          type="text"
          label="name"
          error={!state.name}
        />
      )}
      <ButtonComponent disabled={isDisabled(state)} loading={loading}>
        {footerButtonLabel}
      </ButtonComponent>
      {children}
    </form>
  );
};

export default FormComponent;

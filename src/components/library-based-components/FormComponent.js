import React, { useCallback, useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { validEmail, validPassword } from "../../helpers/validator.helper";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { setFormState } from "../../helpers/form.helper";
import useSubmit from "../hooks/useSubmit";
import { FORM_INPUT_TYPES } from "../../constants/FORM_INPUT_TYPES";

const FormComponent = ({
  className = "App-page__wrapper",
  sendRequest,
  configState,
  inputs,
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
      {inputs.map((input) => (
        <>
          {(input.type === FORM_INPUT_TYPES.email) !== undefined && (
            <TextFieldComponent
              onChange={(value) => setFormState("email", value, setState)}
              value={state.email}
              type="email"
              label="email"
              error={!validEmail(state.email)}
            />
          )}
          {input.type === FORM_INPUT_TYPES.password && (
            <TextFieldComponent
              onChange={(value) => setFormState("password", value, setState)}
              value={state.password}
              type="password"
              label="password"
              error={!validPassword(state.password)}
            />
          )}
          {input.type === FORM_INPUT_TYPES.text && (
            <TextFieldComponent
              onChange={(value) => setFormState(input.value, value, setState)}
              value={state[input.value]}
              type="text"
              label={input.label}
              error={input.isError(state[input.value])}
            />
          )}
        </>
      ))}

      <ButtonComponent disabled={isDisabled(state)} loading={loading}>
        {footerButtonLabel}
      </ButtonComponent>
      {children}
    </form>
  );
};

export default FormComponent;

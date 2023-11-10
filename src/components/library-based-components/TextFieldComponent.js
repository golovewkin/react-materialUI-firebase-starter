import React from "react";
import { trimValue } from "../../helpers/validator.helper";
import { TextField } from "@mui/material";

const TextFieldComponent = ({ onChange, label, type, value = "", error }) => {
  return (
    <TextField
      style={{ marginTop: 20 }}
      label={label}
      type={type}
      value={value}
      error={error}
      onChange={(value) => onChange(trimValue(value.target.value))}
    />
  );
};

export default TextFieldComponent;

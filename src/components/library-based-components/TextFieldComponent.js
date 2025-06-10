import React from "react";
import { trimValue } from "../../helpers/validator.helper.js";
import { TextField } from "@mui/material";

const TextFieldComponent = ({
  onChange,
  label,
  type,
  value = "",
  error,
  InputProps = null,
}) => {
  return (
    <TextField
      style={{ marginTop: 20 }}
      label={label}
      type={type}
      value={value}
      error={error}
      InputProps={InputProps}
      onChange={(value) => onChange(trimValue(value.target.value))}
    />
  );
};

export default TextFieldComponent;

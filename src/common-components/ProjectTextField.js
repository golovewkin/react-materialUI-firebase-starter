import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { trimValue } from "../helpers/validator.helper";

const ProjectTextField = ({ onChange, label, type, value = "", error }) => {
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

ProjectTextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default ProjectTextField;

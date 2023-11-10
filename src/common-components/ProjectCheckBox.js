import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";

const ProjectCheckBox = ({ value = false, onChange }) => {
  return (
    <Checkbox
      style={{ marginRight: 16 }}
      checked={value}
      onChange={onChange}
      color="default"
      inputProps={{ "aria-label": "checkbox" }}
    />
  );
};

ProjectCheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

export default ProjectCheckBox;

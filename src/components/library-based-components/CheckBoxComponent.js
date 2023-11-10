import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxComponent = ({ value = false, onChange }) => {
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

export default CheckBoxComponent;

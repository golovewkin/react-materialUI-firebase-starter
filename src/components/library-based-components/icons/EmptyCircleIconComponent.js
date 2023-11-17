import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { IconButton } from "@mui/material";
const EmptyCircleIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <RadioButtonUncheckedIcon />
    </IconButton>
  );
};

export default EmptyCircleIconComponent;

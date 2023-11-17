import React from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import { IconButton } from "@mui/material";
const EmptyCircleComponent = (props) => {
  return (
    <IconButton {...props}>
      <RadioButtonUncheckedIcon />
    </IconButton>
  );
};

export default EmptyCircleComponent;

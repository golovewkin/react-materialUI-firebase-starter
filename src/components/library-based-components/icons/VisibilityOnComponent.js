import { Visibility } from "@mui/icons-material";
import React from "react";
import { IconButton } from "@mui/material";

const VisibilityOnComponent = (props) => {
  return (
    <IconButton {...props}>
      <Visibility />
    </IconButton>
  );
};

export default VisibilityOnComponent;

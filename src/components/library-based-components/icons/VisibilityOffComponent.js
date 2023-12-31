import { VisibilityOff } from "@mui/icons-material";
import React from "react";
import { IconButton } from "@mui/material";

const VisibilityOffComponent = (props) => {
  return (
    <IconButton {...props}>
      <VisibilityOff />
    </IconButton>
  );
};

export default VisibilityOffComponent;

import React from "react";
import { IconButton } from "@mui/material";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";

const DoneIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <VerifiedSharpIcon />
    </IconButton>
  );
};

export default DoneIconComponent;

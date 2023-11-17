import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { IconButton } from "@mui/material";
const VerifiedIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <VerifiedIcon />
    </IconButton>
  );
};

export default VerifiedIconComponent;

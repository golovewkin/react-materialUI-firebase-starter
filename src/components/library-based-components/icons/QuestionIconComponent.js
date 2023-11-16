import React from "react";
import { IconButton } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
const QuestionIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <QuestionMarkIcon />
    </IconButton>
  );
};

export default QuestionIconComponent;

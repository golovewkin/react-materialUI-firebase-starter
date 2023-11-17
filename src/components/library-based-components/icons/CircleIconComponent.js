import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { IconButton } from "@mui/material";
const CircleIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <TaskAltIcon />
    </IconButton>
  );
};

export default CircleIconComponent;

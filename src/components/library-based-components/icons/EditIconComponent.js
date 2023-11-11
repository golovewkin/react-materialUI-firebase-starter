import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const EditIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <EditIcon />
    </IconButton>
  );
};

export default EditIconComponent;

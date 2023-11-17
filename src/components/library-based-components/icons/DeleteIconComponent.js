import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteIconComponent;

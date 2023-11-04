import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const DeleteIcon = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteIcon;

import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const VDeleteIcon = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default VDeleteIcon;

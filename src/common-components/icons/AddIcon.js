import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const AddIcon = (props) => {
  return (
    <IconButton {...props}>
      <AddIcon />
    </IconButton>
  );
};

export default AddIcon;

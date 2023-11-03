import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const VEditIcon = (props) => {
  return (
    <IconButton {...props}>
      <EditIcon />
    </IconButton>
  );
};

export default VEditIcon;

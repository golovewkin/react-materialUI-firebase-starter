import React from "react";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import IconButton from "@material-ui/core/IconButton";

const VolumeIcon = (props) => {
  return (
    <IconButton {...props} style={{ marginRight: 16 }}>
      <VolumeUpIcon />
    </IconButton>
  );
};

export default VolumeIcon;

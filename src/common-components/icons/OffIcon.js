import React from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import IconButton from "@material-ui/core/IconButton";

const OffIcon = (props) => {
  return (
    <IconButton {...props}>
      <PowerSettingsNewIcon />
    </IconButton>
  );
};

export default OffIcon;

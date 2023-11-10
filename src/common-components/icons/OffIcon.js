import React from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {IconButton} from "@mui/material";

const OffIcon = (props) => {
  return (
    <IconButton {...props}>
      <PowerSettingsNewIcon />
    </IconButton>
  );
};

export default OffIcon;

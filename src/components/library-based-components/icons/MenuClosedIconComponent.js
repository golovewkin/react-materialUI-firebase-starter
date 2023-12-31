import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import React from "react";
import { IconButton } from "@mui/material";
const MenuClosedIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <MenuOpenIcon />
    </IconButton>
  );
};

export default MenuClosedIconComponent;

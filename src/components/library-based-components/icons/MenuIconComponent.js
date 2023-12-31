import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { IconButton } from "@mui/material";
const MenuIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconComponent;

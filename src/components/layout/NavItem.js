import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import { useLocation } from "react-router-dom";

const NavItem = ({ path, icon, label }) => {
  const location = useLocation();

  return (
    <ListItemButton selected={location.pathname === path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default NavItem;

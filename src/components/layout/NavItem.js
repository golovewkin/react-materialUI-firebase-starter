import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const NavItem = ({ path, icon, label }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = React.useCallback(() => {
    navigate(path);
  }, [path, navigate]);

  return (
    <ListItemButton onClick={onClick} selected={location.pathname === path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default NavItem;

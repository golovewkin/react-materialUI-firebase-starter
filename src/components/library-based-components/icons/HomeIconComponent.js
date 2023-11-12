import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
const HomeIconComponent = (props) => {
  return (
    <IconButton {...props}>
      <HomeIcon />
    </IconButton>
  );
};

export default HomeIconComponent;

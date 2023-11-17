import React from "react";
import { Card } from "@mui/material";

const CardComponent = ({ children, className = "" }) => {
  return <Card className={className}>{children}</Card>;
};

export default CardComponent;

import React from "react";
import Card from "@material-ui/core/Card";

const CardComponent = ({ children, className = "" }) => {
  return <Card className={className}>{children}</Card>;
};

export default CardComponent;

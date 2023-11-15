import React from "react";
import "./style.scss";
import Button from "@mui/material/Button";

const ButtonComponent = ({
  children,
  onClick,
  disabled = false,
  style = {},
  startIcon,
  type,
}) => {
  return (
    <Button
      className="ButtonComponent"
      style={style}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={startIcon ? startIcon : null}
      type={type ? type : null}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

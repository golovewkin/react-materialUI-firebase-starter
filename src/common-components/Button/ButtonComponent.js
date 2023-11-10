import React from "react";
import "./style.scss";
import Button from '@mui/material/Button';

const ButtonComponent = ({
  children,
  onClick,
  disabled = false,
  style = {},
  startIcon,
}) => {
  return (
    <Button
      className="VButton"
      style={style}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={startIcon ? startIcon : null}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

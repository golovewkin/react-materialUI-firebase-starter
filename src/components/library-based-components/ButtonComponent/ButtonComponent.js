import React from "react";
import "./style.scss";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const ButtonComponent = ({
  children,
  onClick,
  disabled = false,
  style = {},
  startIcon,
  type,
  loading,
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
      {loading && (
        <CircularProgress
          color="inherit"
          size={20}
          style={{ position: "absolute", right: 20 }}
        />
      )}
      {children}
    </Button>
  );
};

export default ButtonComponent;

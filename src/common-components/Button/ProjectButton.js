import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Button from '@mui/material/Button';

const ProjectButton = ({
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

ProjectButton.propTypes = {
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ProjectButton;

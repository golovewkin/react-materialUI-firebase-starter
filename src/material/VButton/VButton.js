import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import './style.scss'

const VButton = ({children, onClick, disabled = false, style = {}, startIcon}) => {
	return (
    <Button
      className='VButton'
      style={style}
      onClick={onClick}
      disabled={disabled}
      variant="contained"
      startIcon={startIcon ? startIcon : null}
    >
      {children}
    </Button>
  )
};

VButton.propTypes = {
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default VButton;


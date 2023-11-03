import React from 'react';
import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";

const VCard = ({children, className = ''}) => {
	return (
    <Card className={className}>
      {children}
    </Card>
  )
};

VCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default VCard;


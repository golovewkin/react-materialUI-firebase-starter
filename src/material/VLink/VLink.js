import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './style.scss'

const VLink = ({to, children}) => {
	return <Link className='VLink' to={to} children={children}/>
};

VLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default VLink;


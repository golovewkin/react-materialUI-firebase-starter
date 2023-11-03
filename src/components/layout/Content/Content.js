import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

const Content = ({children, user}) => {
	return (
	  <div className={`Content ${user ? 'with-user' : ''}`}>{children}</div>
  )
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
};

export default Content;


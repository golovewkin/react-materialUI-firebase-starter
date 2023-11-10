import React from 'react';
import './style.scss'

const Content = ({children, user}) => {
	return (
	  <div className={`Content ${user ? 'with-user' : ''}`}>{children}</div>
  )
};

export default Content;


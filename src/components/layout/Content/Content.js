import React from 'react';
import './style.scss'
import {
  Link,
  Outlet,
} from "react-router-dom";

const Content = ({children, user}) => {
	// return (
	//   <div className={`Content ${user ? 'with-user' : ''}`}>{children}</div>
  // )

    return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Content;


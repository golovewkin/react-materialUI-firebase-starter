import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const LinkComponent = ({ to, children }) => {
  return <Link className="LinkComponent" to={to} children={children} />;
};

export default LinkComponent;

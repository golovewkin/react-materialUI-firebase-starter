import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const LinkComponent = ({ to, target = "", children }) => {
  return (
    <Link
      className="LinkComponent"
      to={to}
      target={target}
      children={children}
    />
  );
};

export default LinkComponent;

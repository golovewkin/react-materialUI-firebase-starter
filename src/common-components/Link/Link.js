import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const Link = ({ to, children }) => {
  return <Link className="VLink" to={to} children={children} />;
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Link;

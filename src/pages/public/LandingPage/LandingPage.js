import { Link } from "react-router-dom";
import React from "react";
import { urlsConst } from "../../../constants/urlsConst";
import "./style.scss";

export function LandingPage() {
  return (
    <section className="LandingPage">
      <Link to={urlsConst.login}>Login</Link>
      <h3>LandingPage</h3>
    </section>
  );
}

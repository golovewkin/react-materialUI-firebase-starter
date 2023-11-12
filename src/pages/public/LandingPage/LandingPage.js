import { Link } from "react-router-dom";
import React from "react";
import { urlsConst } from "../../../constants/urlsConst";
import "./style.scss";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";

export function LandingPage() {
  return (
    <section className="LandingPage">
      <p>
        Hello, This is a Landing page for a{" "}
        <Link
          to={"https://github.com/golovewkin/react-firebase-starter"}
          target={"_blank"}
        >
          react-firebase-starter
        </Link>
      </p>
      <p>Contact with me if you have any ideas how to develop this project</p>
      <p>Sorry, in this version only admin can create users 😥</p>
      <LinkComponent to={urlsConst.login}>Login</LinkComponent>
    </section>
  );
}

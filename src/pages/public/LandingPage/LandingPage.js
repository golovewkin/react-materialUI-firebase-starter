import { Link } from "react-router-dom";
import React from "react";
import { PUBLIC_URLS } from "../../../constants/USER_URLS";
import "./style.scss";
import LinkComponent from "../../../components/library-based-components/Link/LinkComponent";

const LandingPage = () => {
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
      <LinkComponent to={PUBLIC_URLS.LOGIN}>Login</LinkComponent>
      <br />
      <br />
      <b>BUT!</b> you can{" "}
      <LinkComponent to={PUBLIC_URLS.SEND_REQUEST}>
        Send a request
      </LinkComponent>{" "}
      to our admin to get the access
    </section>
  );
};

export default LandingPage;

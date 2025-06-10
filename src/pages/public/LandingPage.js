import React from "react";
import { PUBLIC_URLS } from "../../constants/URLS.js";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent.js";

const LandingPage = () => {
  return (
    <section className="text-center">
      <p>
        Hello, This is a Landing page for a{" "}
        <LinkComponent
          to={"https://github.com/golovewkin/react-firebase-starter"}
          target={"_blank"}
        >
          react-firebase-starter
        </LinkComponent>
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

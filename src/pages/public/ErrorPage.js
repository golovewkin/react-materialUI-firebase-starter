import React from "react";
import error from "../../../src/assets/img/error.jpg";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent";
import { USER_URLS } from "../../constants/USER_URLS";

const ErrorPage = () => {
  return (
    <>
      <div className="text-center" style={{ margin: 20 }}>
        <LinkComponent to={USER_URLS.HOME} children="Return to the Home page" />
      </div>
      <div className="text-center">
        <img
          style={{ objectFit: "contain", width: 450, height: 450 }}
          src={error}
          alt="sad kitty"
        />
      </div>
    </>
  );
};

export default ErrorPage;

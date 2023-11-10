import React from "react";
import error from "../../../src/assets/img/error.jpg";
import LinkComponent from "../../components/library-based-components/Link/LinkComponent";
import { urlsConst } from "../../constants/urlsConst";

const ErrorPage = () => {
  return (
    <>
      <div className="text-center">
        <LinkComponent to={urlsConst.home} children="Home" />
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

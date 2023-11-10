import React from "react";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const PublicContent = (props) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_CAPTCHA}>
      <Outlet />
    </GoogleReCaptchaProvider>
  );
};

export default withErrorBoundary(PublicContent);

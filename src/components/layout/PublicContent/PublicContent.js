import React from "react";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";

const PublicContent = (props) => {
  return <Outlet />;
};

export default withErrorBoundary(PublicContent);

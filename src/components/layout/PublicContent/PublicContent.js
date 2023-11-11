import React from "react";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import RequireNoAuth from "../../../pages/RequireNoAuth";

const PublicContent = (props) => {
  return (
    <RequireNoAuth>
      <Outlet />
    </RequireNoAuth>
  );
};

export default withErrorBoundary(PublicContent);

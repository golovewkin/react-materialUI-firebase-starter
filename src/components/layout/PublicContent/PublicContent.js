import React from "react";
import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import RequireNoAuth from "../../../pages/RequireNoAuth";

const PublicContent = () => {
  return (
    <RequireNoAuth>
      <Outlet />
    </RequireNoAuth>
  );
};

export default withErrorBoundary(PublicContent);

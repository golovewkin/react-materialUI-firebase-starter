import React from "react";
import { Outlet } from "react-router-dom";
import RequireNoAuth from "../../../pages/RequireNoAuth";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const PublicContent = () => {
  return (
    <RequireNoAuth>
      <Outlet />
    </RequireNoAuth>
  );
};

export default withErrorBoundary(PublicContent);

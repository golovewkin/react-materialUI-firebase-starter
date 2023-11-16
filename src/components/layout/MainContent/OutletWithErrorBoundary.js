import React from "react";

import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";

const OutletWithErrorBoundary = () => {
  return <Outlet />;
};

export default withErrorBoundary(OutletWithErrorBoundary);

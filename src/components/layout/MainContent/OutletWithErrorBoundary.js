import React from "react";

import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hocs/withErrorBoundary";
import Loader from "../../utils/Loader";

const OutletWithErrorBoundary = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Outlet />
    </React.Suspense>
  );
};

export default withErrorBoundary(OutletWithErrorBoundary);

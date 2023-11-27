import React from "react";

import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../hocs/withErrorBoundary";
import Loader from "../../library-based-components/Loader";

const OutletWithErrorBoundary = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Outlet />
    </React.Suspense>
  );
};

export default withErrorBoundary(OutletWithErrorBoundary);

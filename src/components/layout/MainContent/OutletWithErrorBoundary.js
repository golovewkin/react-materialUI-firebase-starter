import React from "react";

import { Outlet } from "react-router-dom";
import { withErrorBoundary } from "../../../hocs/withErrorBoundary.js";
import Loader from "../../library-based-components/Loader.js";

const OutletWithErrorBoundary = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Outlet />
    </React.Suspense>
  );
};

export default withErrorBoundary(OutletWithErrorBoundary);

import React from "react";
import RequireNoAuth from "../../../pages/RequireNoAuth.js";
import OutletWithErrorBoundary from "../MainContent/OutletWithErrorBoundary.js";

const PublicContent = () => {
  return (
    <RequireNoAuth>
      <OutletWithErrorBoundary />
    </RequireNoAuth>
  );
};

export default PublicContent;

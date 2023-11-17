import React from "react";
import RequireNoAuth from "../../../pages/RequireNoAuth";
import OutletWithErrorBoundary from "../MainContent/OutletWithErrorBoundary";

const PublicContent = () => {
  return (
    <RequireNoAuth>
      <OutletWithErrorBoundary />
    </RequireNoAuth>
  );
};

export default PublicContent;

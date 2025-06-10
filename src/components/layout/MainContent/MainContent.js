import React from "react";
import "./style.scss";
import RequireAuth from "../../../pages/RequireAuth.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withErrorBoundary } from "../../../hocs/withErrorBoundary.js";
import { ShowConfirmProvider } from "../../../providers/ShowConfirmProvider.js";
import MainContentWrapper from "./MainContentWrapper.js";
import { MobileViewStateProvider } from "../../../providers/MobileViewStateProvider.js";

const queryClient = new QueryClient();
const MainContent = () => {
  return (
    <RequireAuth>
      <ShowConfirmProvider>
        <QueryClientProvider client={queryClient}>
          <MobileViewStateProvider>
            <MainContentWrapper />
          </MobileViewStateProvider>
        </QueryClientProvider>
      </ShowConfirmProvider>
    </RequireAuth>
  );
};

export default withErrorBoundary(MainContent);

import React from "react";
import "./style.scss";
import RequireAuth from "../../../pages/RequireAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withErrorBoundary } from "../../../hocs/withErrorBoundary";
import { ShowConfirmProvider } from "../../../providers/ShowConfirmProvider";
import MainContentWrapper from "./MainContentWrapper";
import { MobileViewStateProvider } from "../../../providers/MobileViewStateProvider";

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

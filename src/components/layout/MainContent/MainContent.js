import React from "react";
import "./style.scss";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { withErrorBoundary } from "../../hocs/withErrorBoundary";
import OutletWithErrorBoundary from "./OutletWithErrorBoundary";

const queryClient = new QueryClient();
const MainContent = () => {
  return (
    <RequireAuthWithRedirect>
      <QueryClientProvider client={queryClient}>
        <main className="MainContent">
          <Header />
          <Nav />
          <section className="MainContent__content">
            <OutletWithErrorBoundary />
          </section>
        </main>
      </QueryClientProvider>
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(MainContent);

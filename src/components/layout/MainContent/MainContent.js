import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const MainContent = () => {
  return (
    <RequireAuthWithRedirect>
      <QueryClientProvider client={queryClient}>
        <main className="MainContent">
          <Header />
          <Nav />
          <section className="MainContent__content">
            <Outlet />
          </section>
        </main>
      </QueryClientProvider>
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(MainContent);

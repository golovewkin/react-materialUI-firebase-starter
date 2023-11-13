import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";
import { SnackProvider } from "../../../contexts/SnackProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const MainContent = () => {
  return (
    <RequireAuthWithRedirect>
      <QueryClientProvider client={queryClient}>
        <SnackProvider>
          <main className="MainContent">
            <Header />
            <Nav />
            <section className="MainContent__content">
              <Outlet />
            </section>
          </main>
        </SnackProvider>
      </QueryClientProvider>
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(MainContent);

import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";
import { SnackProvider } from "../../../contexts/SnackProvider";

const MainContent = () => {
  return (
    <RequireAuthWithRedirect>
      <SnackProvider>
        <main className="MainContent">
          <Header />
          <Nav />
          <section className="MainContent__content">
            <Outlet />
          </section>
        </main>
      </SnackProvider>
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(MainContent);

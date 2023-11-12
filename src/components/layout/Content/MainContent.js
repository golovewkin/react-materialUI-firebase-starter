import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";

const MainContent = () => {
  return (
    <RequireAuthWithRedirect>
      <main className="MainContent">
        <Header />
        <Nav />
        <section className="MainContent__content">
          <Outlet />
        </section>
      </main>
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(MainContent);

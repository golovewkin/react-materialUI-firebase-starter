import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";
import RequireAuthWithRedirect from "../../../pages/RequireAuthWithRedirect";

const Content = () => {
  return (
    <RequireAuthWithRedirect>
      <Header />
      <Nav />
      <Outlet />
    </RequireAuthWithRedirect>
  );
};

export default withErrorBoundary(Content);

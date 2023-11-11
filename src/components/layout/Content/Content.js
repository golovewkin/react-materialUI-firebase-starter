import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { withErrorBoundary } from "../../hoc/withErrorBoundary/withErrorBoundary";

const Content = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default withErrorBoundary(Content);

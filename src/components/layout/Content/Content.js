import React from "react";
import "./style.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Content = ({ children, user }) => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default Content;

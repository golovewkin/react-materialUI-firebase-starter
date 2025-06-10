import React from "react";
import OutletWithErrorBoundary from "./OutletWithErrorBoundary.js";
import { useMobileViewState } from "../../../providers/MobileViewStateProvider.js";
import Header from "../Header/Header.js";
import Nav from "../Nav/Nav.js";

const MainContentWrapper = () => {
  const { mobileView } = useMobileViewState();

  return (
    <main className={`${!mobileView ? "MainContent" : "MainContent-hidden"}`}>
      <Header />
      <Nav />
      <section className="MainContent__content">
        <OutletWithErrorBoundary />
      </section>
    </main>
  );
};

export default MainContentWrapper;

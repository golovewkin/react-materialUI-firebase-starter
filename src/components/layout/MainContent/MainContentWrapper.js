import React from "react";
import OutletWithErrorBoundary from "./OutletWithErrorBoundary";
import { useMobileViewState } from "../../../providers/MobileViewStateProvider";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

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

import {Route, Routes} from "react-router-dom";
import LoginPage from "../pages/public/LoginPage/LoginPage";
import React from "react";
import ErrorPage from "../pages/public/ErrorPage";
import CreateAccountPage from "../pages/public/CreateAccountPage/CreateAccountPage";
import { urlsConst } from "../constants/urlsConst";
import SettingsPage from "../pages/user/SettingsPage/SettingsPage";
import ResetPassPage from "../pages/public/ResetPassPage/ResetPassPage";

export const getUserRoutes = (user) => {
  if (!user) {
    return (
      <Routes>
        <Route exact path={urlsConst.createAccount}>
          <CreateAccountPage />
        </Route>
        <Route exact path={urlsConst.resetPass}>
          <ResetPassPage />
        </Route>
        <Route path="*">
          <LoginPage />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route exact path={urlsConst.settings}>
        <SettingsPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Routes>
  );
};

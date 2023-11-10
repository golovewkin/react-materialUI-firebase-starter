import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage/LoginPage";
import React from "react";
import ErrorPage from "../pages/public/ErrorPage";
import { urlsConst } from "../constants/urlsConst";
import SettingsPage from "../pages/user/SettingsPage/SettingsPage";
import ResetPassPage from "../pages/public/ResetPassPage/ResetPassPage";
import { LandingPage } from "../pages/public/LandingPage/LandingPage";
import Content from "../components/layout/Content/Content";
import RequireAuth from "../pages/RequireAuth";
import PublicContent from "../components/layout/PublicContent/PublicContent";

export const getUserRoutes = (user) => {
  console.log(user);
  if (!user) {
    return (
      <Routes>
        <Route element={<PublicContent />}>
          <Route path={urlsConst.home} element={<LandingPage />} />
          <Route path={urlsConst.login} element={<LoginPage />} />
          <Route path={urlsConst.resetPass} element={<ResetPassPage />} />
          {/**<Route path={urlsConst.createAccount} element={<CreateAccountPage/>}/>*/}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<Content />}>
          <Route
            path={urlsConst.settings}
            element={
              <RequireAuth>
                <SettingsPage />
              </RequireAuth>
            }
          />
          <Route
            path={urlsConst.settings}
            element={
              <RequireAuth>
                <SettingsPage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
};

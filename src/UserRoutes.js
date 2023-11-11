import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage/LoginPage";
import React from "react";
import ErrorPage from "./pages/public/ErrorPage";
import { urlsConst } from "./constants/urlsConst";
import SettingsPage from "./pages/user/SettingsPage/SettingsPage";
import ResetPassPage from "./pages/public/ResetPassPage/ResetPassPage";
import { LandingPage } from "./pages/public/LandingPage/LandingPage";
import Content from "./components/layout/Content/Content";
import RequireAuth from "./pages/RequireAuth";
import PublicContent from "./components/layout/PublicContent/PublicContent";
import RequireNoUser from "./pages/RequireNoUser";
import { useAuth } from "./contexts/AuthProvider";

export const UserRoutes = () => {
  const auth = useAuth();
  if (!auth.user) {
    return (
      <Routes>
        <Route element={<PublicContent />}>
          <Route path={urlsConst.home} element={<LandingPage />} />
          <Route
            path={urlsConst.login}
            element={
              <RequireNoUser>
                <LoginPage />
              </RequireNoUser>
            }
          />
          <Route
            path={urlsConst.resetPass}
            element={
              <RequireNoUser>
                <ResetPassPage />
              </RequireNoUser>
            }
          />
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
            path={urlsConst.home}
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

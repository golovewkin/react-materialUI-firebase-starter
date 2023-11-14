import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage/LoginPage";
import React from "react";
import ErrorPage from "./pages/public/ErrorPage";
import { URLS } from "./constants/URLS";
import SettingsPage from "./pages/user/SettingsPage/SettingsPage";
import ResetPassPage from "./pages/public/ResetPassPage/ResetPassPage";
import { LandingPage } from "./pages/public/LandingPage/LandingPage";
import Content from "./components/layout/MainContent/MainContent";
import PublicContent from "./components/layout/PublicContent/PublicContent";
import { useAuth } from "./contexts/AuthProvider";
import Loader from "./components/utils/Loader";
import CreateAccountPage from "./pages/admin/CreateAccountPage/CreateAccountPage";
import UserHome from "./pages/user/UserHome";

export const UserRoutes = () => {
  const auth = useAuth();
  if (auth?.loading) {
    return <Loader />;
  }
  if (!auth?.user) {
    return (
      <Routes>
        <Route element={<PublicContent />}>
          <Route path={URLS.home} element={<LandingPage />} />
          <Route path={URLS.login} element={<LoginPage />} />
          <Route path={URLS.resetPass} element={<ResetPassPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<Content />}>
          <Route path={URLS.home} element={<UserHome />} />
          <Route path={URLS.settings} element={<SettingsPage />} />
          *<Route path={URLS.createUser} element={<CreateAccountPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
};

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
import { useAuth } from "./providers/AuthProvider";
import Loader from "./components/utils/Loader";
import CreateAccountPage from "./pages/admin/CreateAccountPage/CreateAccountPage";
import UserHome from "./pages/user/UserHome";
import SendRequestPage from "./pages/public/SendRequestPage/SendRequestPage";
import { AdminInquiriesPage } from "./pages/admin/AdminInquiriesPage";

export const UserRoutes = () => {
  const auth = useAuth();
  if (auth?.loading) {
    return <Loader />;
  }
  if (!auth?.user) {
    return (
      <Routes>
        <Route element={<PublicContent />}>
          <Route path={URLS.HOME} element={<LandingPage />} />
          <Route path={URLS.LOGIN} element={<LoginPage />} />
          <Route path={URLS.RESET_PASS} element={<ResetPassPage />} />
          <Route path={URLS.SEND_REQUEST} element={<SendRequestPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<Content />}>
          <Route path={URLS.HOME} element={<UserHome />} />
          <Route path={URLS.SETTINGS} element={<SettingsPage />} />
          <Route path={URLS.CREATE_USER} element={<CreateAccountPage />} />
          <Route path={URLS.INQUIRIES} element={<AdminInquiriesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
};

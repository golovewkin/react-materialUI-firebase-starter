import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { ADMIN_URLS, PUBLIC_URLS, USER_URLS } from "./constants/URLS.js";
import Content from "./components/layout/MainContent/MainContent.js";
import PublicContent from "./components/layout/PublicContent/PublicContent.js";
import { useAuth } from "./providers/AuthProvider.js";
import Loader from "./components/library-based-components/Loader.js";
const ErrorPage = lazy(() => import("./pages/ErrorPage.js"));
const SettingsPage = lazy(() => import("./pages/user/SettingsPage.js"));
const LoginPage = lazy(() => import("./pages/public/LoginPage.js"));
const LandingPage = lazy(() => import("./pages/public/LandingPage.js"));
const CreationPage = lazy(
  () => import("./pages/admin/CreationPage/CreationPage.js"),
);
const UserHome = lazy(() => import("./pages/user/UserHome.js"));
const SendRequestPage = lazy(() => import("./pages/public/SendRequestPage.js"));
const InquiriesPage = lazy(
  () => import("./pages/admin/InquiriesPage/InquiriesPage.js"),
);
const AcceptInvitePage = lazy(() => import("./pages/public/AcceptInvitePage.js"));
const ResetPassPage = lazy(() => import("./pages/public/ResetPassPage.js"));

export const UserRoutes = () => {
  const auth = useAuth();
  if (auth?.loading) {
    return <Loader />;
  }
  if (!auth?.user) {
    return (
      <Routes>
        <Route element={<PublicContent />}>
          <Route path={PUBLIC_URLS.HOME} element={<LandingPage />} />
          <Route path={PUBLIC_URLS.LOGIN} element={<LoginPage />} />
          <Route
            path={`${PUBLIC_URLS.ACCEPT_INVITE}/:id`}
            element={<AcceptInvitePage />}
          />
          <Route
            path={PUBLIC_URLS.SEND_REQUEST}
            element={<SendRequestPage />}
          />{" "}
          <Route path={PUBLIC_URLS.RESET_PASS} element={<ResetPassPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route element={<Content />}>
          <Route path={PUBLIC_URLS.HOME} element={<UserHome />} />
          <Route path={USER_URLS.SETTINGS} element={<SettingsPage />} />
          <Route path={ADMIN_URLS.CREATION} element={<CreationPage />} />
          <Route path={ADMIN_URLS.INQUIRIES} element={<InquiriesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    );
  }
};

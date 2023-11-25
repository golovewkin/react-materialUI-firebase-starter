import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { ADMIN_URLS, PUBLIC_URLS, USER_URLS } from "./constants/URLS";
import Content from "./components/layout/MainContent/MainContent";
import PublicContent from "./components/layout/PublicContent/PublicContent";
import { useAuth } from "./providers/AuthProvider";
import Loader from "./components/utils/Loader";
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const SettingsPage = lazy(
  () => import("./pages/user/SettingsPage/SettingsPage.js"),
);
const LoginPage = lazy(() => import("./pages/public/LoginPage"));
const LandingPage = lazy(
  () => import("./pages/public/LandingPage/LandingPage"),
);
const CreationPage = lazy(
  () => import("./pages/admin/CreationPage/CreationPage"),
);
const UserHome = lazy(() => import("./pages/user/UserHome"));
const SendRequestPage = lazy(() => import("./pages/public/SendRequestPage"));
const InquiriesPage = lazy(
  () => import("./pages/admin/InquiriesPage/InquiriesPage"),
);
const AcceptInvitePage = lazy(
  () => import("./pages/public/AcceptInvitePage/AcceptInvitePage"),
);

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
          />
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

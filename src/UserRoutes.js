import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/public/LoginPage/LoginPage";
import React, { lazy } from "react";
import { URLS } from "./constants/URLS";
import Content from "./components/layout/MainContent/MainContent";
import PublicContent from "./components/layout/PublicContent/PublicContent";
import { useAuth } from "./providers/AuthProvider";
import Loader from "./components/utils/Loader";
const ErrorPage = lazy(() => import("./pages/public/ErrorPage"));
const SettingsPage = lazy(
  () => import("./pages/user/SettingsPage/SettingsPage.js"),
);
const ResetPassPage = lazy(
  () => import("./pages/public/ResetPassPage/ResetPassPage"),
);
const LandingPage = lazy(
  () => import("./pages/public/LandingPage/LandingPage"),
);
const CreateAccountPage = lazy(
  () => import("./pages/admin/CreateAccountPage/CreateAccountPage"),
);
const UserHome = lazy(() => import("./pages/user/UserHome"));
const SendRequestPage = lazy(
  () => import("./pages/public/SendRequestPage/SendRequestPage"),
);
const AdminInquiriesPage = lazy(
  () => import("./pages/AdminInquiriesPage/AdminInquiriesPage"),
);
const AcceptRequestPage = lazy(
  () => import("./pages/public/AcceptRequestPage/AcceptRequestPage"),
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
          <Route path={URLS.HOME} element={<LandingPage />} />
          <Route path={URLS.LOGIN} element={<LoginPage />} />
          <Route path={URLS.RESET_PASS} element={<ResetPassPage />} />
          <Route path={URLS.SEND_REQUEST} element={<SendRequestPage />} />
          <Route path={`${URLS.INQUIRY}/:id`} element={<AcceptRequestPage />} />
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

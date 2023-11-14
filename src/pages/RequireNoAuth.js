import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PUBLIC_URLS, URLS } from "../constants/URLS";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { COMMON } from "../constants/COMMON";

const RequireNoAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const isPublicUrl = PUBLIC_URLS.includes(location.pathname);
  if (!isPublicUrl && !auth.user) {
    BrowserStorageService.setData(COMMON.noAuthUrl, location.pathname);
  }

  if (auth.user) {
    return <Navigate to={URLS.home} />;
  }

  if (isPublicUrl) {
    return children;
  } else {
    return <Navigate to={URLS.login} />;
  }
};

export default RequireNoAuth;

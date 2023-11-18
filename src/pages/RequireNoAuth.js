import { useAuth } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PUBLIC_URLS, USER_URLS } from "../constants/USER_URLS";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { COMMON } from "../constants/COMMON";
import { isItAdminURL, isItPublicURL } from "../helpers/util.helper";

const RequireNoAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const isPublicUrl = isItPublicURL(location.pathname);
  const isAdminUrl = isItAdminURL(location.pathname);
  if (!isAdminUrl && !isPublicUrl && !auth.user) {
    console.log("set");
    BrowserStorageService.setData(COMMON.NO_AUTH_URL, location.pathname);
  }

  if (auth.user) {
    return <Navigate to={PUBLIC_URLS.HOME} />;
  }

  if (isPublicUrl) {
    return children;
  } else {
    return <Navigate to={PUBLIC_URLS.LOGIN} />;
  }
};

export default RequireNoAuth;

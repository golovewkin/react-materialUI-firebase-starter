import { useAuth } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { URLS } from "../constants/URLS";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { COMMON } from "../constants/COMMON";
import { isItPublicURL } from "../helpers/util.helper";

const RequireNoAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const isPublicUrl = isItPublicURL(location.pathname);
  if (!isPublicUrl && !auth.user) {
    BrowserStorageService.setData(COMMON.NO_AUTH_URL, location.pathname);
  }

  if (auth.user) {
    return <Navigate to={URLS.HOME} />;
  }

  if (isPublicUrl) {
    return children;
  } else {
    return <Navigate to={URLS.LOGIN} />;
  }
};

export default RequireNoAuth;

import { useAuth } from "../providers/AuthProvider.js";
import { useLocation } from "react-router-dom";
import { BrowserStorageService } from "../services/BrowserStorageService.js";
import { COMMON } from "../constants/COMMON.js";
import { isUserURL } from "../helpers/util.helper.js";

const RequireNoAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  // Probably this would never happen, it's here just in case
  if (auth.user) {
    return null;
  }

  if (isUserURL(location.pathname)) {
    BrowserStorageService.setData(COMMON.NO_AUTH_URL, location.pathname);
  }

  return children;
};

export default RequireNoAuth;

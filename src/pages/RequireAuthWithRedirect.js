import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { COMMON } from "../constants/COMMON";

const RequireAuthWithRedirect = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const from = BrowserStorageService.getData(COMMON.NO_AUTH_URL);

  React.useEffect(() => {
    // Redirect user to a page they were trying to access
    if (from && auth.user?.id) {
      BrowserStorageService.removeData(COMMON.NO_AUTH_URL);
      return navigate(from);
    }
  }, [navigate, auth.user?.id, from]);

  if (auth.user) {
    return children;
  } else {
    return null;
  }
};

export default RequireAuthWithRedirect;

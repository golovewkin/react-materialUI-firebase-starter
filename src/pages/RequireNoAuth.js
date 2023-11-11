import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { publicUrls, urlsConst } from "../constants/urlsConst";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { commonConst } from "../constants/commonConst";

const RequireNoAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  const isPublicUrl = publicUrls.includes(location.pathname);
  if (!isPublicUrl && !auth.user) {
    BrowserStorageService.setData(commonConst.noAuthUrl, location.pathname);
  }

  if (auth.user) {
    return <Navigate to={urlsConst.home} />;
  }

  if (isPublicUrl) {
    return children;
  } else {
    return <Navigate to={urlsConst.login} />;
  }
};

export default RequireNoAuth;

import { useAuth } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { urlsConst } from "../constants/urlsConst";

const RequireNoUser = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={urlsConst.home} />;
  } else {
    return children;
  }
};

export default RequireNoUser;

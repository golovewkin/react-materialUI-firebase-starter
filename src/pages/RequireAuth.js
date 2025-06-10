import { useAuth } from "../providers/AuthProvider.js";

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  // Probably this would never happen, it's here just in case
  if (!auth.user) {
    return null;
  } else {
    return children;
  }
};

export default RequireAuth;

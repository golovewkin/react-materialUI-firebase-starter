import React from "react";
import { UserDBService } from "../services/to_remove/UserDBService";
import { useLogError } from "./LogErrorProvider";
import { onUserlogin, auth, logIn } from "../services/firebase";
import { EntityModel } from "../models/EntityModel";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  // const navigate = useNavigate();
  const showError = useLogError();

  React.useEffect(() => {
    onUserlogin(auth, async (userData, error) => {
      if (error) {
        showError("login error", error);
      }
      try {
        if (userData) {
          const user = await EntityModel.getById(userData.uid, "users");
          console.log(user);

          // setUser(user);
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (e) {
        showError("get user data error", e);
      }
    });
  }, [showError]);

  let signin = async (newUser) => {
    try {
      await logIn(auth, newUser.email, newUser.password);
    } catch (e) {
      showError("sign in error", e);
    }
  };

  let signout = async (callback) => {
    try {
      await auth.signOut();
    } catch (e) {
      showError("sign out error", e);
    }
  };

  let value = { user, signin, signout, setUser };

  return <AuthContext.Provider value={value} children={children} />;
};

export const useAuth = () => {
  const contextValue = React.useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

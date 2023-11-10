import React from "react";
import { auth, signInWithEmailAndPass } from "../services/firebase";
import { UserDBService } from "../services/to_remove/UserDBService";
import { useLogError } from "./LogErrorProvider";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const showError = useLogError();

  React.useEffect(() => {
    auth.onAuthStateChanged(async (userData) => {
      try {
        console.log(user);
        if (user) {
          const user = await UserDBService.getUserByFirebaseId(userData.uid);
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (e) {
        showError("get user data error", e);
      }
    });
    return () => {
      auth.onAuthStateChanged(() => {});
    };
  }, [showError, user]);

  let signin = async (newUser) => {
    try {
      await signInWithEmailAndPass(auth, newUser.email, newUser.password);
      // window.location.href = "/";
      // debugger;
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

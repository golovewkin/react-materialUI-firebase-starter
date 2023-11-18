import React from "react";
import { useShowError } from "./ShowErrorProvider";
import { onUserlogin, auth, logIn } from "../services/firebase";
import { UserModel } from "../models/UserModel";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const showError = useShowError();

  React.useEffect(() => {
    onUserlogin(auth, async (userData, error) => {
      if (error) {
        return showError("login error", error);
      }

      try {
        setLoading(true);
        if (userData) {
          const user = await UserModel.getById(userData.uid);
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (e) {
        showError("get user data error", e);
      } finally {
        setLoading(false);
      }
    });
  }, [showError, setLoading]);

  let signin = async (newUser) => {
    return logIn(auth, newUser.email, newUser.password);
  };

  let signout = async () => {
    return auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{ user, signin, signout, setUser, loading }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const contextValue = React.useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

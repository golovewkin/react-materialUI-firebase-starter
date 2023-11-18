import React from "react";
import { useShowMessage } from "./ShowMessageProvider";
import { onUserlogin, auth, logIn } from "../services/firebase";
import { UserModel } from "../models/UserModel";
import { useNavigate } from "react-router-dom";
import { PUBLIC_URLS } from "../constants/USER_URLS";
import { BrowserStorageService } from "../services/BrowserStorageService";
import { COMMON } from "../constants/COMMON";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const showError = useShowMessage();

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

  const signIn = async (newUser) => {
    await logIn(auth, newUser.email, newUser.password);
    const savedUrl = BrowserStorageService.getData(COMMON.NO_AUTH_URL);
    if (savedUrl) {
      navigate(savedUrl);
      BrowserStorageService.removeData(COMMON.NO_AUTH_URL);
    } else {
      navigate(PUBLIC_URLS.HOME);
    }
  };

  const signOut = async () => {
    await auth.signOut();
    navigate(PUBLIC_URLS.HOME);
  };

  return (
    <AuthContext.Provider
      value={{ user, signin: signIn, signout: signOut, setUser, loading }}
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

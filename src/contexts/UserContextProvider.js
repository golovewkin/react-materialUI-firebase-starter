import React from "react";
import firebase from "../services/firebase";
import {UserDBService} from "../services/to_remove/UserDBService";
import {LogService} from "../services/LogService";

export const TemplateContext = React.createContext(null);

export const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async (userData) => {
      try {
        if (user) {
          const user = await UserDBService.getUserByFirebaseId(userData.uid);
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (e) {
        LogService.showAndLogError("get user data error", e);
      }
    });
    return () => {
      firebase.auth().onAuthStateChanged(() => {});
    };
  }, []);


  return <TemplateContext.Provider
    value={{user, setUser}}
    children={children}
  />;
}

export const useUserContext = () => {
  const contextValue = React.useContext(TemplateContext);
  if (!contextValue) {
    throw new Error("Tried to use template context from outside the provider");
  }
  return contextValue;
};
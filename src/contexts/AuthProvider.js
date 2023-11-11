import React from "react";
// import { app, signInWithEmailAndPass } from "../services/firebase";
import { UserDBService } from "../services/to_remove/UserDBService";
import { useLogError } from "./LogErrorProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import app from "../services/firebase";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const showError = useLogError();

  // React.useEffect(() => {
  //   auth.onAuthStateChanged(async (userData) => {
  //     try {
  //       if (user) {
  //         const user = await UserDBService.getUserByFirebaseId(userData.uid);
  //         setUser(user);
  //       } else {
  //         setUser(null);
  //       }
  //     } catch (e) {
  //       showError("get user data error", e);
  //     }
  //   });
  //   return () => {
  //     auth.onAuthStateChanged(() => {});
  //   };
  // }, [showError, user]);

  let signin = async (newUser) => {
    try {
      await app.auth().signInWithEmailAndPassword(newUser);
      // await AuthService.logIn(newUser);
      // const user = await signInWithEmailAndPassword(
      //   auth,
      //   newUser.email,
      //   newUser.password,
      // );
      // console.log(user);
      // window.location.href = "/";
      // debugger;
    } catch (e) {
      showError("sign in error", e);
    }
  };

  let signout = async (callback) => {
    try {
      // await auth.signOut();
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

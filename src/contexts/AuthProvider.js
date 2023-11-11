import React from "react";
import firebaseApp from "../services/firebase";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { UserDBService } from "../services/to_remove/UserDBService";
import { useLogError } from "./LogErrorProvider";

const auth = getAuth(firebaseApp);

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  // const navigate = useNavigate();
  const showError = useLogError();

  React.useEffect(() => {
    onAuthStateChanged(auth, async (userData, error) => {
      if (error) {
        showError("login error", error);
      }
      try {
        if (userData) {
          const user = await UserDBService.getUserByFirebaseId(userData.uid);
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
      await signInWithEmailAndPassword(auth, newUser.email, newUser.password);
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

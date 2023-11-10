import React, { useCallback } from "react";
import { auth } from "../services/firebase";
import { UserDBService } from "../services/to_remove/UserDBService";
import { LogService } from "../services/LogService";
import ErrorPopup from "../components/popups/ErrorPopup";

const LogErrorContext = React.createContext(null);

export const LogErrorProvider = ({ children }) => {
  const [error, setError] = React.useState({
    open: false,
    message: "",
  });

  const showMessage = useCallback((state) => {
    LogService.logError(error);
    setError({ message, open });
  }, []);

  return (
    <LogErrorContext.Provider value={value}>
      <ErrorPopup
        open={error.open}
        message={error.message}
        setOpen={(open) => setError((oldState) => ({ ...oldState, open }))}
      />
      {children}
    </LogErrorContext.Provider>
  );
};

export const useLogError = () => {
  const contextValue = React.useContext(LogErrorContext);
  if (LogErrorContext === undefined) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

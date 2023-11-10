import React, { useCallback } from "react";
import { LogService } from "../services/LogService";
import ErrorPopup from "../components/popups/ErrorPopup";

const LogErrorContext = React.createContext(null);

export const LogErrorProvider = ({ children }) => {
  const [error, setError] = React.useState({
    open: false,
    message: "",
  });

  const showError = useCallback((message, error) => {
    LogService.log(message, error);
    setError({ message, open: true });
  }, []);

  return (
    <LogErrorContext.Provider value={showError}>
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
  if (!LogErrorContext) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

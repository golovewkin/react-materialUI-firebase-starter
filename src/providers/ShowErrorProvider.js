import React, { useCallback } from "react";
import ErrorPopup from "../components/popups/ErrorPopup";

const ShowErrorContext = React.createContext(null);

export const ShowErrorProvider = ({ children }) => {
  const [error, setError] = React.useState({
    open: false,
    message: "",
  });

  const showError = useCallback((message, error) => {
    setError({ title: message, message: error.message, open: true });
  }, []);

  return (
    <ShowErrorContext.Provider value={showError}>
      <ErrorPopup
        open={error.open}
        message={error.message}
        title={error.title}
        setOpen={(open) => setError((oldState) => ({ ...oldState, open }))}
      />
      {children}
    </ShowErrorContext.Provider>
  );
};

export const useShowError = () => {
  const contextValue = React.useContext(ShowErrorContext);
  if (!ShowErrorContext) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

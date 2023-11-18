import React, { useCallback } from "react";
import MessagePopup from "../components/popups/MessagePopup";

const ShowMessageContext = React.createContext(null);

export const ShowMessageProvider = ({ children }) => {
  const [state, setState] = React.useState({
    open: false,
    message: "",
  });

  const showMessage = useCallback((title, message) => {
    const messageToShow = message.message ? message.message : message;
    setState({ title, message: messageToShow, open: true });
  }, []);

  return (
    <ShowMessageContext.Provider value={showMessage}>
      <MessagePopup
        open={state.open}
        message={state.message}
        title={state.title}
        setOpen={(open) => setState((oldState) => ({ ...oldState, open }))}
      />
      {children}
    </ShowMessageContext.Provider>
  );
};

export const useShowMessage = () => {
  const contextValue = React.useContext(ShowMessageContext);
  if (!contextValue) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

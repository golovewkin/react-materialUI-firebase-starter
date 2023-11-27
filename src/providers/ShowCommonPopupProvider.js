import React, { useCallback } from "react";
import CommonPopup from "../components/popups/CommonPopup";

const ShowCommonPopupContext = React.createContext(null);

export const ShowCommonPopupProvider = ({ children }) => {
  const [state, setState] = React.useState({
    open: false,
    content: "",
  });

  const showPopup = useCallback((title, content) => {
    setState({ title, content, open: true });
  }, []);

  return (
    <ShowCommonPopupContext.Provider value={showPopup}>
      <CommonPopup
        open={state.open}
        message={state.message}
        title={state.title}
        setOpen={(open) => setState((oldState) => ({ ...oldState, open }))}
      />
      {children}
    </ShowCommonPopupContext.Provider>
  );
};

export const useShowCommonPopup = () => {
  const contextValue = React.useContext(ShowCommonPopupContext);
  if (!contextValue) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

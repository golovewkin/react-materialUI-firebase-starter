import React, { useCallback } from "react";
import CommonPopup from "../components/popups/CommonPopup";

const ShowCommonPopupContext = React.createContext(null);

export const ShowCommonPopupProvider = ({ children }) => {
  const [state, setState] = React.useState({
    open: false,
    content: "",
    footer: "",
    showOk: true,
  });

  const showPopup = useCallback(({ title, content, footer, showOk = true }) => {
    setState({ title, content, open: true, footer, showOk });
  }, []);

  return (
    <ShowCommonPopupContext.Provider value={showPopup}>
      <CommonPopup
        open={state.open}
        content={state.content}
        showOk={state.showOk}
        footer={state.footer}
        title={state.title}
        onClose={(open) =>
          setState((oldState) => ({ ...oldState, open: false }))
        }
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

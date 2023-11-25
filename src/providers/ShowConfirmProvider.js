import React, { useCallback } from "react";
import ConfirmationPopup from "../components/popups/ConfirmationPopup";
import { LogService } from "../services/LogService";
import { useShowMessage } from "./ShowMessageProvider";

const ShowConfirmContext = React.createContext(null);

export const ShowConfirmProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  // It doesn't save callback between renders that's why we need ref here
  const callBack = React.useRef(null);
  const messageRef = React.useRef("");
  const showError = useShowMessage();
  const showConfirm = useCallback((cb, message) => {
    if (!cb) {
      throw new Error("Success callback is not provided!");
    }
    callBack.current = cb;
    messageRef.current = message;
    setOpen(true);
  }, []);

  const onSuccess = useCallback(
    async (cb) => {
      try {
        setOpen(false);
        await cb();
        callBack.current = null;
        messageRef.current = "";
      } catch (e) {
        LogService.log("error", e, showError);
      }
    },
    [showError],
  );
  return (
    <ShowConfirmContext.Provider value={showConfirm}>
      <ConfirmationPopup
        open={open}
        message={messageRef.current}
        onSuccess={() => onSuccess(callBack.current)}
        onClose={() => setOpen(false)}
      />
      {children}
    </ShowConfirmContext.Provider>
  );
};

export const useShowConfirm = () => {
  const contextValue = React.useContext(ShowConfirmContext);
  if (!contextValue) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

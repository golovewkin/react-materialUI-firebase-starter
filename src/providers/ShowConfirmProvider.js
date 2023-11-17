import React, { useCallback } from "react";
import ConfirmationPopup from "../components/popups/ConfirmationPopup";
import { LogService } from "../services/LogService";
import { useShowError } from "./ShowErrorProvider";
import { useSnack } from "./SnackProvider";

const ShowConfirmContext = React.createContext(null);

export const ShowConfirmProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  // It doesn't save callback between renders that's why we need ref here
  const callBack = React.useRef(null);
  const showError = useShowError();
  const showSnack = useSnack();
  const showConfirm = useCallback((cb) => {
    if (!cb) {
      throw new Error("Success callback is not provided!");
    }
    callBack.current = cb;
    setOpen(true);
  }, []);

  const onSuccess = useCallback(
    async (cb) => {
      try {
        await cb();
        showSnack("Done!");
        setOpen(false);
      } catch (e) {
        LogService.log("error", e, showError);
      }
    },
    [showError, showSnack],
  );
  return (
    <ShowConfirmContext.Provider value={showConfirm}>
      <ConfirmationPopup
        open={open}
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

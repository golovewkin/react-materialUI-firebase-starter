import React, { useCallback } from "react";
import ConfirmationPopup from "../components/popups/ConfirmationPopup";
import { LogService } from "../services/LogService";
import { useShowError } from "./ShowErrorProvider";
import { useSnack } from "./SnackProvider";

const ShowConfirmContext = React.createContext(null);

export const ShowConfirmProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [callback, setCallback] = React.useState(null);
  const showError = useShowError();
  const showSnack = useSnack();
  const showConfirm = useCallback((cb) => {
    debugger;
    if (!cb) {
      throw new Error("Success callback is not provided!");
    }
    setCallback(cb);
    setOpen(true);
  }, []);

  const onSuccess = useCallback(
    async (cb) => {
      try {
        console.log(callback);
        await cb();
        showSnack("Done!");
        setOpen(false);
        setCallback(null);
      } catch (e) {
        LogService.log("error", e, showError);
      }
    },
    [showError, callback],
  );
  console.log("callback", callback);
  return (
    <ShowConfirmContext.Provider value={showConfirm}>
      <ConfirmationPopup
        open={open}
        onSuccess={() => onSuccess(callback)}
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

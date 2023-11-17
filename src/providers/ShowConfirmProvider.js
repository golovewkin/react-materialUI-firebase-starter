import React, { useCallback } from "react";
import ConfirmationPopup from "../components/popups/ConfirmationPopup";
import { LogService } from "../services/LogService";
import { useShowError } from "./ShowErrorProvider";

const ShowConfirmContext = React.createContext(null);

export const ShowConfirmProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showError = useShowError();
  const showConfirm = useCallback(() => {
    setOpen(true);
  }, []);

  const onSuccess = useCallback(
    async (cb) => {
      try {
        await cb();
      } catch (e) {
        LogService.log("error", e, showError);
      }
      setOpen(false);
    },
    [showError],
  );

  const value = { showConfirm, onSuccess };
  return (
    <ShowConfirmContext.Provider value={value}>
      <ConfirmationPopup open={open} onSuccess={onSuccess} />
      {children}
    </ShowConfirmContext.Provider>
  );
};

export const useShowConfirm = () => {
  const contextValue = React.useContext(ShowConfirmContext);
  if (!ShowConfirmContext) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

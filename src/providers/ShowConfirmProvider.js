import React, { useCallback } from "react";
import ConfirmationPopup from "../components/popups/ConfirmationPopup";

const ShowConfirmContext = React.createContext(null);

export const ShowConfirmProvider = ({ children, onSuccess }) => {
  const [open, setOpen] = React.useState(false);
  const showConfirm = useCallback(() => {
    setOpen(true);
  }, []);

  const value = { showConfirm };
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

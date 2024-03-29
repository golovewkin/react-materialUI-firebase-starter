import React, { useCallback } from "react";
import { Snackbar } from "@mui/material";

const SnackContext = React.createContext(null);

export const SnackProvider = ({ children }) => {
  const [snack, setSnack] = React.useState({
    open: false,
    message: "",
  });

  const showSnack = useCallback((message) => {
    setSnack({ message, open: true });
  }, []);

  const closeSnack = useCallback(() => {
    setSnack({ message: "", open: false });
  }, []);

  return (
    <SnackContext.Provider value={showSnack}>
      <Snackbar
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snack.open}
        onClose={closeSnack}
        message={snack.message}
      />
      {children}
    </SnackContext.Provider>
  );
};

export const useSnack = () => {
  const contextValue = React.useContext(SnackContext);
  if (!contextValue) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

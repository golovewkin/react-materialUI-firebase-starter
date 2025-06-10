import React, { useCallback, useState } from "react";
import { BrowserStorageService } from "../services/BrowserStorageService.js";

const MobileViewStateContext = React.createContext(null);

export const MobileViewStateProvider = ({ children }) => {
  const [mobileView, setMobileView] = useState(
    Boolean(BrowserStorageService.getData("mobileOn")),
  );

  const mobileViewSwitch = useCallback(() => {
    const goalState = !mobileView;
    if (goalState) {
      BrowserStorageService.setData("mobileOn", "true");
    } else {
      BrowserStorageService.removeData("mobileOn");
    }

    setMobileView(goalState);
  }, [mobileView]);

  return (
    <MobileViewStateContext.Provider value={{ mobileView, mobileViewSwitch }}>
      {children}
    </MobileViewStateContext.Provider>
  );
};

export const useMobileViewState = () => {
  const contextValue = React.useContext(MobileViewStateContext);
  if (!contextValue) {
    throw new Error("Tried to use context from outside the provider");
  }
  return contextValue;
};

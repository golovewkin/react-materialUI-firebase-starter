import React from "react";

export const TemplateContext = React.createContext(null);

export const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null);

  return <TemplateContext.Provider
    value={{user, setUser}}
    children={children}
  />;
}

export const useUserContext = () => {
  const contextValue = React.useContext(TemplateContext);
  if (!contextValue) {
    throw new Error("Tried to use template context from outside the provider");
  }
  return contextValue;
};
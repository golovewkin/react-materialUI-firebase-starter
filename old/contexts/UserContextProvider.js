import React from "react";

export const TemplateContext = React.createContext(null);

export const TemplateContextProvider = ({initialTemplateValue, children}) => {
  const [templateValue, setTemplateValue] = React.useState(initialTemplateValue);

  return <TemplateContext.Provider
    value={{templateValue, setTemplateValue}}
    children={children}
  />;
}

export const useTemplateContext = () => {
  const contextValue = React.useContext(TemplateContext);
  if (!contextValue) {
    throw new Error("Tried to use template context from outside the provider");
  }
  return contextValue;
};
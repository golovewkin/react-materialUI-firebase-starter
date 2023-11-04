import React from "react";

const MainContext = React.createContext({
  onUpdateEntities: () => {},
  entities: null,
  onUpdateUser: () => {},
  user: null,
});

export default MainContext;

import React from "react";

const MainContext = React.createContext({
  groups: null,
  showCreateGroupPopup: () => {},
  showEditGroupPopup: () => {},
  showCreateWordPopup: () => {},
  showEditWordPopup: () => {},
  showConfirmation: () => {},
  onRemoveGroup: () => {},
  onUpdateGroup: () => {},
  user: null,
  updateUser: () => {},
  showSnack: () => {},
});

export default MainContext;

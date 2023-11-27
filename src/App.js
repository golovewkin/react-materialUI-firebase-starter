import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ShowCommonPopupProvider } from "./providers/ShowCommonPopupProvider";
import { SnackProvider } from "./providers/SnackProvider";

function App() {
  return (
    <SnackProvider>
      <ShowCommonPopupProvider>
        <AuthProvider>
          <div className="App">
            <UserRoutes />
          </div>
        </AuthProvider>
      </ShowCommonPopupProvider>
    </SnackProvider>
  );
}

export default App;

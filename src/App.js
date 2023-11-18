import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ShowMessageProvider } from "./providers/ShowMessageProvider";
import { SnackProvider } from "./providers/SnackProvider";

function App() {
  return (
    <SnackProvider>
      <ShowMessageProvider>
        <AuthProvider>
          <div className="App">
            <UserRoutes />
          </div>
        </AuthProvider>
      </ShowMessageProvider>
    </SnackProvider>
  );
}

export default App;

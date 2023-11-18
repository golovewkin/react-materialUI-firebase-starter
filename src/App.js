import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ShowMessageProvider } from "./providers/ShowMessageProvider";
import { SnackProvider } from "./providers/SnackProvider";

function App() {
  return (
    <ShowMessageProvider>
      <AuthProvider>
        <SnackProvider>
          <div className="App">
            <UserRoutes />
          </div>
        </SnackProvider>
      </AuthProvider>
    </ShowMessageProvider>
  );
}

export default App;

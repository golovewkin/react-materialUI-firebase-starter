import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./contexts/AuthProvider";
import { LogErrorProvider } from "./contexts/LogErrorProvider";

function App() {
  return (
    <LogErrorProvider>
      <AuthProvider>
        <div className="App">
          <UserRoutes />
        </div>
      </AuthProvider>
    </LogErrorProvider>
  );
}

export default App;

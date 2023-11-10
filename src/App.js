import "./App.scss";
import { getUserRoutes } from "./helpers/routes.helper";
import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import { LogErrorProvider } from "./contexts/LogErrorProvider";

function App() {
  const user = useAuth();
  return (
    <LogErrorProvider>
      <AuthProvider>
        <div className="App">{getUserRoutes(user)}</div>
      </AuthProvider>
    </LogErrorProvider>
  );
}

export default App;

import "./App.scss";
import { getUserRoutes } from "./helpers/routes.helper";
import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";

function App() {
  const user = useAuth();
  return (
    <AuthProvider>
      <div className="App">{getUserRoutes(user)}</div>
    </AuthProvider>
  );
}

export default App;

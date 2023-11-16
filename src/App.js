import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./contexts/AuthProvider";
import { ShowErrorProvider } from "./contexts/ShowErrorProvider";

function App() {
  return (
    <ShowErrorProvider>
      <AuthProvider>
        <div className="App">
          <UserRoutes />
        </div>
      </AuthProvider>
    </ShowErrorProvider>
  );
}

export default App;

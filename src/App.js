import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./contexts/AuthProvider";
import { ShowErrorProvider } from "./contexts/ShowErrorProvider";
import { SnackProvider } from "./contexts/SnackProvider";

function App() {
  return (
    <ShowErrorProvider>
      <AuthProvider>
        <SnackProvider>
          <div className="App">
            <UserRoutes />
          </div>
        </SnackProvider>
      </AuthProvider>
    </ShowErrorProvider>
  );
}

export default App;

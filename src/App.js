import "./App.scss";
import { UserRoutes } from "./UserRoutes";
import React from "react";
import { AuthProvider } from "./providers/AuthProvider";
import { ShowErrorProvider } from "./providers/ShowErrorProvider";
import { SnackProvider } from "./providers/SnackProvider";

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

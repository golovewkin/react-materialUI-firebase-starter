import "./App.scss";
import { getUserRoutes } from "./helpers/routes.helper";
import React from "react";
import { AuthProvider, useAuth } from "./contexts/AuthProvider";
import { LogErrorProvider } from "./contexts/LogErrorProvider";
import app from "./services/firebase";
import { UserDBService } from "./services/to_remove/UserDBService";

function App() {
  const user = useAuth();

  app.auth().onAuthStateChanged(async (userData) => {
    try {
      console.log(user);
      if (user) {
        const user = await UserDBService.getUserByFirebaseId(userData.uid);
        console.log(user);
      } else {
        console.log(user);
      }
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <LogErrorProvider>
      <AuthProvider>
        <div className="App">{getUserRoutes(user)}</div>
      </AuthProvider>
    </LogErrorProvider>
  );
}

export default App;

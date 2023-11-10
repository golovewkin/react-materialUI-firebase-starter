import './App.scss';
import "./styles/global.scss";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Content from "./components/layout/Content/Content";
import {getUserRoutes} from "./helpers/routes.helper";
import React from "react";
import {AuthProvider, useAuth} from "./contexts/AuthProvider";

function App() {
  const user = useAuth();
  return (
    <AuthProvider>
      <div className="App">
        <Header/>
        <div className={`${user ? "App__content" : ""}`}>
          <Nav user={user}/>
          <Content user={user}>{getUserRoutes(user)}</Content>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

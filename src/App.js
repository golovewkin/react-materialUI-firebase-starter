import './App.scss';
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Content from "./components/layout/Content/Content";
import {getUserRoutes} from "./helpers/routes.helper";
import React from "react";
import {UserContextProvider, useUserContext} from "./contexts/UserContextProvider";

function App() {
  const user = useUserContext();
return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Header />
          <div className={`${user ? "App__content" : ""}`}>
            <Nav user={user} />
            <Content user={user}>{getUserRoutes(user)}</Content>
          </div>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;

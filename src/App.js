import './App.scss';
import "./styles/global.scss";
import MainContext from "./contexts/main.context";
import ErrorPopup from "./components/popups/ErrorPopup";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Nav from "./components/layout/Nav/Nav";
import Content from "./components/layout/Content/Content";
import {getUserRoutes} from "./helpers/routes.helper";
import React from "react";

function App() {
return (
    <MainContext.Provider
      value={{
        user: state.user,
        updateUser,
        showSnack,
        showConfirmation,
      }}
    >
      <Router>
        <div className="App">
          <ErrorPopup
            open={error.open}
            message={error.message}
            setOpen={(open) => setError((oldState) => ({ ...oldState, open }))}
          />
          <Header />
          <div className={`${state.user ? "App__content" : ""}`}>
            <Nav user={state.user} />
            <Content user={state.user}>{getUserRoutes(state.user)}</Content>
          </div>
        </div>
      </Router>
    </MainContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "../src/services/firebase";
import MainContext from "../src/contexts/main.context";
import { getUserRoutes } from "../src/UserRoutes";
import Header from "../src/components/layout/Header/Header";
import Content from "../src/components/layout/Content/MainContent";
import Nav from "../src/components/layout/Nav/Nav";
import "./App.scss";
import Loader from "../src/components/utils/Loader";
import { LogService } from "../src/services/LogService";
import ErrorPopup from "../src/components/popups/ErrorPopup";
import { UserDBService } from "../src/services/to_remove/UserDBService";
import Snackbar from "@material-ui/core/Snackbar";
import { EntityDBService } from "../src/services/to_remove/EntityDBService";
import ConfirmationPopup from "../src/components/popups/ConfirmationPopup";

const App = () => {
  const [popupState, setPopupState] = React.useState({
    confirm: false,
    wordEdit: false,
    groupEdit: false,
    current: null,
    mode: null,
    onSuccess: () => {},
  });

  const [snack, setSnack] = React.useState({
    open: false,
    message: "",
  });

  const [error, setError] = React.useState({
    open: false,
    message: "",
  });

  const [state, setState] = useState({
    user: null,
    groups: null,
    loading: true,
  });

  const showSnack = (message) => {
    setSnack({ message, open: true });
  };

  const closeSnack = () => {
    setSnack({ message: "", open: false });
  };

  const showMessage = (message, open) => {
    setError({ message, open });
  };

  React.useEffect(() => {
    LogService.showMessage = showMessage;
  }, []);

  const updateUser = (newUser) => {
    setState((oldState) => {
      return { ...oldState, user: newUser };
    });
  };

  const showConfirmation = React.useCallback((onSuccess) => {
    setPopupState((oldState) => ({ ...oldState, confirm: true, onSuccess }));
  }, []);

  const hideConfirmation = React.useCallback(() => {
    setPopupState((oldState) => ({
      ...oldState,
      confirm: false,
      onSuccess: null,
    }));
  }, []);

  if (state.loading) {
    return <Loader />;
  }

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
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={snack.open}
            onClose={closeSnack}
            message={snack.message}
          />
          <ConfirmationPopup
            open={popupState.confirm}
            onClose={hideConfirmation}
            onSuccess={popupState.onSuccess}
          />
          <WordEditPopup
            onSuccess={popupState.onSuccess}
            open={popupState.wordEdit}
            onClose={hideEditWordPopup}
            word={popupState.current}
            mode={popupState.mode}
          />
          <GroupEditPopup
            onSuccess={popupState.onSuccess}
            open={popupState.groupEdit}
            onClose={hideEditGroupPopup}
            group={popupState.current}
            mode={popupState.mode}
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
};

export default App;

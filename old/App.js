import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "./services/firebase";
import MainContext from "./contexts/main.context";
import { getUserRoutes } from "./helpers/routes.helper";
import Header from "./components/layout/Header/Header";
import Content from "./components/layout/Content/Content";
import Nav from "./components/layout/Nav/Nav";
import "./styles/global.scss";
import "./App.scss";
import Loader from "./components/utils/Loader";
import { LogService } from "./services/LogService";
import ErrorPopup from "./components/popups/ErrorPopup";
import { UserDBService } from "./services/UserDBService";
import Snackbar from "@material-ui/core/Snackbar";
import { EntityDBService } from "./services/EntityDBService";
import ConfirmationPopup from "./components/popups/ConfirmationPopup";

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
    firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const userData = await UserDBService.getUserByFirebaseId(user.uid);
          const groups = await EntityDBService.getUserGroups(userData);
          setState((oldState) => ({
            ...oldState,
            user: userData,
            loading: false,
            groups,
          }));
        } else {
          setState((oldState) => ({
            ...oldState,
            user: null,
            loading: false,
            groups: null,
          }));
        }
      } catch (e) {
        LogService.showAndLogError("get user data error", e);
        setState((oldState) => ({
          ...oldState,
          user: null,
          loading: false,
          groups: null,
        }));
      }
    });
    return () => {
      firebase.auth().onAuthStateChanged(() => {});
    };
  }, []);

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

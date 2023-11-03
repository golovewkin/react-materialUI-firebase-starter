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
import { GroupDBService } from "./services/GroupDBService";
import ConfirmationPopup from "./components/popups/ConfirmationPopup";
import WordEditPopup from "./components/popups/WordEditPopup/WordEditPopup";
import GroupEditPopup from "./components/popups/GroupEditPopup/GroupEditPopup";
import { GroupModel } from "./models/GroupModel";
import { makeId } from "./helpers/util.helper";
import { commonConst } from "./constants/commonConst";
import { WordModel } from "./models/WordModel";

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
          const groups = await GroupDBService.getUserGroups(userData);
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

  const onRemoveGroup = React.useCallback((group) => {
    setState((oldState) => {
      const newGroups = [...oldState.groups];
      const removedGroupIndex = newGroups.findIndex(
        ({ id }) => id === group.id
      );
      newGroups.splice(removedGroupIndex, 1);
      return { ...oldState, groups: newGroups };
    });
  }, []);

  const onUpdateGroup = React.useCallback((editedGroup) => {
    setState((oldState) => {
      const newGroups = [...oldState.groups];
      const index = newGroups.findIndex(({ id }) => id === editedGroup.id);
      newGroups[index] = editedGroup;
      return { ...oldState, groups: newGroups };
    });
  }, []);

  const onCreateGroup = React.useCallback((newGroup) => {
    setState((oldState) => {
      const newGroups = [...oldState.groups];
      newGroups.push(newGroup);
      return { ...oldState, groups: newGroups };
    });
  }, []);

  /// ------------ group edit ----------------------------------
  const showCreateGroupPopup = React.useCallback(
    (user) => {
      const newGroup = new GroupModel({ id: makeId(), ownerId: user.id });
      setPopupState((oldState) => ({
        ...oldState,
        groupEdit: true,
        current: newGroup,
        mode: commonConst.create,
        onSuccess: onCreateGroup,
      }));
    },
    [onCreateGroup]
  );

  const showEditGroupPopup = React.useCallback(
    (group) => {
      setPopupState((oldState) => ({
        ...oldState,
        groupEdit: true,
        mode: commonConst.edit,
        current: group,
        onSuccess: onUpdateGroup,
      }));
    },
    [onUpdateGroup]
  );

  const hideEditGroupPopup = React.useCallback(() => {
    setPopupState((oldState) => ({
      ...oldState,
      groupEdit: false,
      current: null,
      mode: null,
    }));
  }, []);
  /// ------------END group edit ----------------------------------

  /// ------------ Word Creating ----------------------------------
  const showCreateWordPopup = React.useCallback(
    (user, onSuccess, word = "") => {
      const newWord = new WordModel({ id: makeId(), ownerId: user.id, word });
      setPopupState((oldState) => ({
        ...oldState,
        wordEdit: true,
        current: newWord,
        mode: commonConst.create,
        onSuccess,
      }));
    },
    []
  );

  const showEditWordPopup = React.useCallback((word, onSuccess) => {
    setPopupState((oldState) => ({
      ...oldState,
      wordEdit: true,
      mode: commonConst.edit,
      current: word,
      onSuccess,
    }));
  }, []);

  const hideEditWordPopup = React.useCallback(() => {
    setPopupState((oldState) => ({
      ...oldState,
      wordEdit: false,
      current: null,
      mode: null,
    }));
  }, []);
  /// ------------END group edit ----------------------------------

  if (state.loading) {
    return <Loader />;
  }

  return (
    <MainContext.Provider
      value={{
        user: state.user,
        updateUser,
        groups: state.groups,
        showSnack,
        showConfirmation,
        showCreateGroupPopup,
        showEditGroupPopup,
        onRemoveGroup,
        onUpdateGroup,
        showCreateWordPopup,
        showEditWordPopup,
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

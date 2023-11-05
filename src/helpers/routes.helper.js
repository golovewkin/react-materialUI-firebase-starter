import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage/LoginPage";
import React from "react";
import ErrorPage from "../pages/public/ErrorPage";
import CreateAccountPage from "../pages/public/CreateAccountPage/CreateAccountPage";
import { urlsConst } from "../constants/urlsConst";
import SettingsPage from "../pages/user/SettingsPage/SettingsPage";
import ResetPassPage from "../pages/public/ResetPassPage/ResetPassPage";
import GroupPage from "../pages/user/GroupPage/GroupPage";
import GroupsPage from "../pages/user/Entities/EntitiesPage";

export const getUserRoutes = (user) => {
  if (!user) {
    return (
      <Switch>
        <Route exact path={urlsConst.createAccount}>
          <CreateAccountPage />
        </Route>
        <Route exact path={urlsConst.resetPass}>
          <ResetPassPage />
        </Route>
        <Route path="*">
          <LoginPage />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <GroupsPage />
      </Route>
      <Route exact path={urlsConst.settings}>
        <SettingsPage />
      </Route>
      <Route exact path={`${urlsConst.group}:id`}>
        <GroupPage />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

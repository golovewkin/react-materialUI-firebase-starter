import React from "react";
import "./style.scss";
import { List } from "@mui/material";
import { useAuth } from "../../../contexts/AuthProvider";
import NavItem from "../NavItem";
import { URLS } from "../../../constants/URLS";
import EditIconComponent from "../../library-based-components/icons/EditIconComponent";
import HomeIconComponent from "../../library-based-components/icons/HomeIconComponent";
import { ROLES } from "../../../constants/ROLES";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent";

const Nav = () => {
  const auth = useAuth();

  if (!auth.user) return null;

  return (
    <div className="Nav custom-scroll">
      <List component="nav" aria-label="main nav">
        <NavItem label="Home" icon={<HomeIconComponent />} path={URLS.home} />
        <NavItem
          label="Settings"
          icon={<EditIconComponent />}
          path={URLS.settings}
        />
        {auth.user.role === ROLES.admin && (
          <NavItem
            label="Create user"
            icon={<AddIconComponent />}
            path={URLS.createUser}
          />
        )}
      </List>
    </div>
  );
};

export default Nav;

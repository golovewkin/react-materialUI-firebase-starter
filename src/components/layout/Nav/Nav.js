import React from "react";
import "./style.scss";
import { List } from "@mui/material";
import { useAuth } from "../../../contexts/AuthProvider";
import NavItem from "../NavItem";
import { urlsConst } from "../../../constants/urlsConst";
import EditIconComponent from "../../library-based-components/icons/EditIconComponent";
import HomeIconComponent from "../../library-based-components/icons/HomeIconComponent";
import { userRoles } from "../../../constants/userRoles";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent";

const Nav = () => {
  const auth = useAuth();

  if (!auth.user) return null;

  return (
    <div className="Nav custom-scroll">
      <List component="nav" aria-label="main nav">
        <NavItem
          label="Home"
          icon={<HomeIconComponent />}
          path={urlsConst.home}
        />
        <NavItem
          label="Settings"
          icon={<EditIconComponent />}
          path={urlsConst.settings}
        />
        {auth.user.role === userRoles.admin && (
          <NavItem
            label="Create user"
            icon={<AddIconComponent />}
            path={urlsConst.createUser}
          />
        )}
      </List>
    </div>
  );
};

export default Nav;

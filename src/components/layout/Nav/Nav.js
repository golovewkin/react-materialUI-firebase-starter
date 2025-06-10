import React from "react";
import "./style.scss";
import { List } from "@mui/material";
import { useAuth } from "../../../providers/AuthProvider.js";
import NavItem from "../NavItem.js";
import { ADMIN_URLS, PUBLIC_URLS, USER_URLS } from "../../../constants/URLS.js";
import EditIconComponent from "../../library-based-components/icons/EditIconComponent.js";
import HomeIconComponent from "../../library-based-components/icons/HomeIconComponent.js";
import { USER_ROLES } from "../../../constants/USER_ROLES.js";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent.js";
import QuestionIconComponent from "../../library-based-components/icons/QuestionIconComponent.js";

const Nav = () => {
  const auth = useAuth();

  if (!auth.user) return null;

  return (
    <div className="Nav custom-scroll">
      <List component="nav" aria-label="main nav">
        <NavItem
          label="Home"
          icon={<HomeIconComponent />}
          path={PUBLIC_URLS.HOME}
        />
        <NavItem
          label="Settings"
          icon={<EditIconComponent />}
          path={USER_URLS.SETTINGS}
        />
        {auth.user.role === USER_ROLES.ADMIN && (
          <>
            <NavItem
              label="Creation"
              icon={<AddIconComponent />}
              path={ADMIN_URLS.CREATION}
            />
            <NavItem
              label="Requests"
              icon={<QuestionIconComponent />}
              path={ADMIN_URLS.INQUIRIES}
            />
          </>
        )}
      </List>
    </div>
  );
};

export default Nav;

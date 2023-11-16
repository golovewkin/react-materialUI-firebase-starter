import React from "react";
import "./style.scss";
import { List } from "@mui/material";
import { useAuth } from "../../../providers/AuthProvider";
import NavItem from "../NavItem";
import { URLS } from "../../../constants/URLS";
import EditIconComponent from "../../library-based-components/icons/EditIconComponent";
import HomeIconComponent from "../../library-based-components/icons/HomeIconComponent";
import { ROLES } from "../../../constants/ROLES";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent";
import QuestionIconComponent from "../../library-based-components/icons/QuestionIconComponent";

const Nav = () => {
  const auth = useAuth();

  if (!auth.user) return null;

  return (
    <div className="Nav custom-scroll">
      <List component="nav" aria-label="main nav">
        <NavItem label="Home" icon={<HomeIconComponent />} path={URLS.HOME} />
        <NavItem
          label="Settings"
          icon={<EditIconComponent />}
          path={URLS.SETTINGS}
        />
        {auth.user.role === ROLES.ADMIN && (
          <>
            {" "}
            <NavItem
              label="Create user"
              icon={<AddIconComponent />}
              path={URLS.CREATE_USER}
            />
            <NavItem
              label="Requests"
              icon={<QuestionIconComponent />}
              path={URLS.INQUIRIES}
            />
          </>
        )}
      </List>
    </div>
  );
};

export default Nav;

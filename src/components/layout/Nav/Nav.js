import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { urlsConst } from "../../../constants/urlsConst";
import "./style.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import BathtubIcon from "@material-ui/icons/Bathtub";
import { withRouter } from "react-router";

const Nav = ({ user, history }) => {
  const [path, setPath] = useState(history.location.pathname);

  useEffect(() => {
    setPath(history.location.pathname);
  }, [history.location.pathname]);

  if (!user) return null;
  return (
    <div className="Nav">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          selected={path === "/"}
          button
          onClick={() => history.push("/")}
        >
          <ListItemIcon>
            <PhotoLibraryIcon className={`${path === "/" ? "active" : ""}`} />
          </ListItemIcon>
          <ListItemText primary="Vocabulary" />
        </ListItem>
        <ListItem
          selected={path === urlsConst.settings}
          button
          onClick={() => history.push(urlsConst.settings)}
        >
          <ListItemIcon>
            <BathtubIcon
              className={`${path === urlsConst.settings ? "active" : ""}`}
            />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

Nav.propTypes = {
  user: PropTypes.object,
};

export default withRouter(Nav);

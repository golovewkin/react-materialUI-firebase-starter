import React from "react";
import "./style.scss";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent";

const Nav = ({ user }) => {
  // const [path, setPath] = useState(history.location.pathname);

  // console.log(path);
  //   useEffect(() => {
  //     setPath(history.location.pathname);
  //   }, [history.location.pathname]);

  if (!user) return null;
  return (
    <div className="Nav">
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton>
          <ListItemIcon>
            <AddIconComponent />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Nav;

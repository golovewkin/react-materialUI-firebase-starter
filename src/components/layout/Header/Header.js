import React from "react";
import "./style.scss";
import { AuthService } from "../../../services/AuthService";
import { useHistory } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "../../../common-components/icons/AddIcon";
import MainContext from "../../../contexts/main.context";
import OffIcon from "../../../common-components/icons/OffIcon";

const Header = () => {
  const history = useHistory();
  const { user, showCreateGroupPopup, showCreateWordPopup } = React.useContext(
    MainContext
  );

  if (!user) return null;
  return (
    <div className="Header">
      <div className="Header__menu">
        {user.pic && <Avatar className="avatar" src={user.pic} />}
        {!user.pic && <Avatar className="avatar">{user.name[0]}</Avatar>}
        <span>{user.name}</span>
      </div>
      <div className="Header__user">
        <AddIcon onClick={() => showCreateWordPopup(user, () => {})} />
        <AddIcon onClick={() => showCreateGroupPopup(user)} />
        <OffIcon onClick={() => AuthService.signOut(history)} />
      </div>
    </div>
  );
};

export default Header;

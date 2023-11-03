import React from "react";
import "./style.scss";
import { AuthService } from "../../../services/AuthService";
import { useHistory } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import VAddIcon from "../../../material/icons/VAddIcon";
import MainContext from "../../../contexts/main.context";
import VOffIcon from "../../../material/icons/VOffIcon";

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
        <VAddIcon onClick={() => showCreateWordPopup(user, () => {})} />
        <VAddIcon onClick={() => showCreateGroupPopup(user)} />
        <VOffIcon onClick={() => AuthService.signOut(history)} />
      </div>
    </div>
  );
};

export default Header;

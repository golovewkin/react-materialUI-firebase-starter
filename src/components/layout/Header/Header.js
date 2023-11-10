import React from "react";
import "./style.scss";
import AddIconComponent from "../../library-based-components/icons/AddIconComponent";
import MainContext from "../../../contexts/main.context";
import OffIcon from "../../library-based-components/icons/OffIcon";
import AvatarComponent from "../../library-based-components/AvatarComponent";

const Header = () => {
  // const history = useHistory();
  const history = {};
  const { user, showCreateGroupPopup, showCreateWordPopup } =
    React.useContext(MainContext);

  if (!user) return null;
  return (
    <div className="Header">
      <div className="Header__menu">
        {user.pic && <AvatarComponent src={user.pic} />}
        {!user.pic && <AvatarComponent>{user.name[0]}</AvatarComponent>}
        <span>{user.name}</span>
      </div>
      <div className="Header__user">
        <AddIconComponent onClick={() => showCreateWordPopup(user, () => {})} />
        <AddIconComponent onClick={() => showCreateGroupPopup(user)} />
        {/*<OffIcon onClick={() => AuthService.signOut(history)} />*/}
      </div>
    </div>
  );
};

export default Header;

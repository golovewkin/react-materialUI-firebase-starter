import React from "react";
import "./style.scss";
import AvatarComponent from "../../library-based-components/AvatarComponent";
import { useAuth } from "../../../contexts/AuthProvider";
import OffIconComponent from "../../library-based-components/icons/OffIconComponent";

const Header = () => {
  const auth = useAuth();

  if (!auth.user) return null;
  return (
    <div className="Header">
      <div className="Header__menu">
        <AvatarComponent src={auth.user.pic} />
        <span>{auth.user.name}</span>
      </div>
      <div className="Header__user">
        {/*<AddIconComponent onClick={() => showCreateWordPopup(user, () => {})} />*/}
        {/*<AddIconComponent onClick={() => showCreateGroupPopup(user)} />*/}
        <OffIconComponent onClick={() => auth.signout()} />
      </div>
    </div>
  );
};

export default Header;

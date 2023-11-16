import React from "react";
import "./style.scss";
import AvatarComponent from "../../library-based-components/AvatarComponent";
import { useAuth } from "../../../providers/AuthProvider";
import OffIconComponent from "../../library-based-components/icons/OffIconComponent";

const Header = () => {
  const auth = useAuth();

  if (!auth.user) return null;
  return (
    <div className="Header">
      <OffIconComponent onClick={() => auth.signout()} />
      <AvatarComponent src={auth.user.pic} />
      <span>{auth.user.name}</span>
    </div>
  );
};

export default Header;

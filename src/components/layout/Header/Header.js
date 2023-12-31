import React from "react";
import "./style.scss";
import AvatarComponent from "../../library-based-components/AvatarComponent";
import { useAuth } from "../../../providers/AuthProvider";
import OffIconComponent from "../../library-based-components/icons/OffIconComponent";
import { useMobileViewState } from "../../../providers/MobileViewStateProvider";
import MenuClosedIconComponent from "../../library-based-components/icons/MenuClosedIconComponent";
import MenuIconComponent from "../../library-based-components/icons/MenuIconComponent";

const Header = () => {
  const { mobileView, mobileViewSwitch } = useMobileViewState();
  const auth = useAuth();

  if (!auth.user) return null;
  return (
    <div className="Header">
      {mobileView && <MenuClosedIconComponent onClick={mobileViewSwitch} />}
      {!mobileView && <MenuIconComponent onClick={mobileViewSwitch} />}

      <AvatarComponent src={auth.user.pic} />
      <span>{auth.user.name}</span>
      <OffIconComponent onClick={() => auth.signout()} />
    </div>
  );
};

export default Header;

import React from "react";
import "./style.scss";
import AvatarComponent from "../../library-based-components/AvatarComponent.js";
import { useAuth } from "../../../providers/AuthProvider.js";
import OffIconComponent from "../../library-based-components/icons/OffIconComponent.js";
import { useMobileViewState } from "../../../providers/MobileViewStateProvider.js";
import MenuClosedIconComponent from "../../library-based-components/icons/MenuClosedIconComponent.js";
import MenuIconComponent from "../../library-based-components/icons/MenuIconComponent.js";

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

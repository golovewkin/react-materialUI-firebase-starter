import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";

const UserHome = () => {
  const auth = useAuth();
  return (
    <span>
      Hello, {auth.user.name}, this is your Home <HomeIconComponent />
    </span>
  );
};

export default UserHome;

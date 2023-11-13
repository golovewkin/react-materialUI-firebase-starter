import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { userRoles } from "../../constants/userRoles";
import AdminHome from "../admin/AdminHome";

const UserHome = () => {
  const auth = useAuth();
  if (auth.user.role === userRoles.admin) {
    return <AdminHome />;
  }

  return (
    <>
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
    </>
  );
};

export default UserHome;

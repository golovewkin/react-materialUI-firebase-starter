import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { ROLES } from "../../constants/ROLES";
import AdminHome from "../admin/AdminHome";
import { COLLECTIONS } from "../../constants/COLLECTIONS";
import { API_COMMANDS } from "../../constants/API_COMMANDS";

const UserHome = () => {
  const auth = useAuth();
  if (auth.user.role === ROLES.admin) {
    return (
      <AdminHome
        fetchCommand={API_COMMANDS.getAll}
        fetchParamCollection={COLLECTIONS.users}
        queryKey="admin-get-users"
      />
    );
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

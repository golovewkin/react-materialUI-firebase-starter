import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { ROLES } from "../../constants/ROLES";
import AdminHome from "../admin/AdminHome";
import { COLLECTIONS } from "../../constants/COLLECTIONS";
import { DBService } from "../../services/DBService";

const UserHome = () => {
  const auth = useAuth();
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.users);
  }, []);

  if (auth.user.role === ROLES.admin) {
    return <AdminHome getData={getData} queryKey="admin-get-users" />;
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

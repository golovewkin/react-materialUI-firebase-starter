import React from "react";
import { useAuth } from "../../providers/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { USER_ROLES } from "../../constants/USER_ROLES";
import AdminHome from "../admin/AdminHome";
import { COLLECTIONS } from "../../constants/COLLECTIONS";
import { DBService } from "../../services/DBService";

const UserHome = () => {
  const { user } = useAuth();
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.USERS);
  }, []);

  if (user.role === USER_ROLES.ADMIN) {
    return <AdminHome getData={getData} queryKey="admin-get-users" />;
  }

  return (
    <>
      <h3>
        Hello, {user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
    </>
  );
};

export default UserHome;

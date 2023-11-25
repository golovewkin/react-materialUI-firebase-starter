import React from "react";
import { DBService } from "../../services/DBService";
import { COLLECTIONS } from "../../constants/COLLECTIONS";
import UsersList from "./UsersList/UsersList";

const AdminHome = () => {
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.USERS);
  }, []);

  return <UsersList getData={getData} queryKey="admin-get-users" />;
};

export default AdminHome;

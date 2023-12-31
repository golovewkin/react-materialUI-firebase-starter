import React from "react";
import { DBService } from "../../../services/DBService";
import { COLLECTIONS } from "../../../constants/COLLECTIONS";
import UsersList from "./UsersList";
import { UserModel } from "../../../models/UserModel";

const UsersPage = () => {
  const getData = React.useCallback(() => {
    return DBService.getAll(COLLECTIONS.USERS);
  }, []);

  return (
    <UsersList
      getData={getData}
      queryKey="admin-get-users"
      cb={(model) => new UserModel(model)}
    />
  );
};

export default UsersPage;

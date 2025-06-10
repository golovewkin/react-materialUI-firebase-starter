import React from "react";
import { DBService } from "../../../services/DBService.js";
import { COLLECTIONS } from "../../../constants/COLLECTIONS.js";
import UsersList from "./UsersList.js";
import { UserModel } from "../../../models/UserModel.js";

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

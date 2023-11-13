import React, { useCallback } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { collections } from "../../constants/collections";
import { DBService } from "../../services/DBService";
import FetchDataComponent from "../../components/hoc/FetchDataComponent";

export const AdminHome = () => {
  const auth = useAuth();

  const getData = useCallback(() => {
    return DBService.getAll(collections.users);
  }, []);

  return (
    <FetchDataComponent
      queryKey={"admin-get-users"}
      getData={getData}
      render={(users) => (
        <>
          <h3>
            Hello, {auth.user.name}, this is your Home page
            <HomeIconComponent />
          </h3>
          {users && (
            <>
              <h4>Users list</h4>
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    Name: {user.name}, role: {user.role}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    ></FetchDataComponent>
  );
};

export default AdminHome;

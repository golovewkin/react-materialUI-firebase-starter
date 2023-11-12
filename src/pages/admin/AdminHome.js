import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { APIProvider, useAPI } from "../../contexts/APIProvider";
import { collectionsConst } from "../../constants/collectionsConst";
import { apiCommands } from "../../constants/apiCommands";

export const AdminHome = () => {
  const auth = useAuth();
  const users = useAPI();
  return (
    <APIProvider
      command={apiCommands.getAll}
      collection={collectionsConst.users}
    >
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
      {users && (
        <>
          <h4>Users list</h4>
          <ul>{/*{users}*/}</ul>
        </>
      )}
    </APIProvider>
  );
};

export default AdminHome;

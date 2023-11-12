import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import { APIProvider, useAPI } from "../../contexts/APIProvider";
import { collectionsConst } from "../../constants/collectionsConst";
import { apiCommands } from "../../constants/apiCommands";

export const AdminHome = () => {
  const auth = useAuth();
  const data = useAPI();

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  // TODO component doesn't understand that data as fetched
  return (
    <APIProvider
      command={apiCommands.getAll}
      collection={collectionsConst.users}
    >
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
      {data && (
        <>
          <h4>Users list</h4>
          <ul>
            {/*{data.map((user) => (*/}
            {/*  <p>*/}
            {/*    Name: {user.name}, role: {user.role}*/}
            {/*  </p>*/}
            {/*))}*/}
          </ul>
        </>
      )}
    </APIProvider>
  );
};

export default AdminHome;

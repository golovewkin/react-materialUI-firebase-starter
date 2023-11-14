import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import withDataFetch from "../../components/hoc/withDataFetch";

export const AdminHome = ({ data }) => {
  const auth = useAuth();

  return (
    <>
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
      <h4>Users list</h4>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            Name: {user.name}, role: {user.role}
          </li>
        ))}
      </ul>
    </>
  );
};

export default withDataFetch(AdminHome);
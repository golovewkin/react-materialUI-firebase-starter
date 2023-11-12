import React from "react";
import { useAuth } from "../../contexts/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";

export const AdminHome = () => {
  const auth = useAuth();
  return (
    <>
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
      <h4>Users list</h4>
      <ul>{/*{users}*/}</ul>
    </>
  );
};

export default AdminHome;

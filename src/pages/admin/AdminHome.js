import React, { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import HomeIconComponent from "../../components/library-based-components/icons/HomeIconComponent";
import withDataFetch from "../../components/hocs/withDataFetch";
import { clone, makeId } from "../../helpers/util.helper";
import { useShowConfirm } from "../../providers/ShowConfirmProvider";
import useSubmit from "../../components/hooks/useSubmit";
import { UserModel } from "../../models/UserModel";
import TCell from "../../components/library-based-components/table/TCell";
import DeleteIconComponent from "../../components/library-based-components/icons/DeleteIconComponent";
import TableContainerComponent from "../../components/library-based-components/table/TableContainerComponent";
import { USER_ROLES } from "../../constants/USER_ROLES";

export const AdminHome = ({ data }) => {
  const auth = useAuth();
  const [state, setState] = useState(clone(data));
  const showConfirm = useShowConfirm();

  const { submit: removeUser } = useSubmit({
    sendRequest: async (user) => {
      setState((oldState) => {
        return oldState.filter(({ id }) => id !== user.id);
      });
      await UserModel.deleteEntity(user.id);
    },
  });

  const rows = state
    .filter(({ role }) => role !== USER_ROLES.ADMIN)
    .map((user) => {
      return {
        id: user.id,
        components: [
          <TCell key={user.id + 1}>{user.firebaseId}</TCell>,
          <TCell key={user.id + 2}>{user.name}</TCell>,
          <TCell key={user.id + 5}>
            <DeleteIconComponent
              onClick={() => showConfirm(() => removeUser(user))}
            />
          </TCell>,
        ],
      };
    });

  return (
    <>
      <h3>
        Hello, {auth.user.name}, this is your Home page
        <HomeIconComponent />
      </h3>
      <h4>Users list</h4>
      <section>Here you can remove a user</section>
      <ol>
        <li>
          <b>BEFORE removing here!! </b>Remove a user from firebase auth
        </li>

        <li>Remove a user here</li>
      </ol>
      <TableContainerComponent rows={rows} columns={<AdminUserColumnsList />} />
    </>
  );
};

const AdminUserColumnsList = () => {
  return [
    <TCell key={makeId()}>Id</TCell>,
    <TCell key={makeId()}>Name</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
  ];
};
export default withDataFetch(AdminHome);

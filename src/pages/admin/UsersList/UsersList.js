import { useAuth } from "../../../providers/AuthProvider";
import { useState } from "react";
import { useShowConfirm } from "../../../providers/ShowConfirmProvider";
import { UserModel } from "../../../models/UserModel";
import { USER_ROLES } from "../../../constants/USER_ROLES";
import TCell from "../../../components/library-based-components/table/TCell";
import ContentCopyIconComponent from "../../../components/library-based-components/icons/ContentCopyIconComponent";
import DeleteIconComponent from "../../../components/library-based-components/icons/DeleteIconComponent";
import { clone } from "../../../helpers/util.helper";
import HomeIconComponent from "../../../components/library-based-components/icons/HomeIconComponent";
import TableContainerComponent from "../../../components/library-based-components/table/TableContainerComponent";
import withDataFetch from "../../../components/hocs/withDataFetch";
import useSubmit from "../../../components/hooks/useSubmit";
import UsersColumnsList from "./UsersColumnList";

const UsersList = ({ data }) => {
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
          <TCell key={user.id + 1}>
            {user.firebaseId}{" "}
            <ContentCopyIconComponent copy={user.firebaseId} />
          </TCell>,
          <TCell key={user.id + 2}>{user.name}</TCell>,
          <TCell key={user.id + 3}>
            <DeleteIconComponent
              onClick={() =>
                showConfirm(
                  () => removeUser(user),
                  "Are you sure you want to remove this user?",
                )
              }
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
      <TableContainerComponent rows={rows} columns={<UsersColumnsList />} />
    </>
  );
};
export default withDataFetch(UsersList);

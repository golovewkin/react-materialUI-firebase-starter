import TCell from "../../../components/library-based-components/table/TCell";
import { makeId } from "../../../helpers/util.helper";

const UsersColumnsList = () => {
  return [
    <TCell key={makeId()}>Id</TCell>,
    <TCell key={makeId()}>Name</TCell>,
    <TCell key={makeId()}>Actions</TCell>,
  ];
};

export default UsersColumnsList;

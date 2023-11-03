import React from "react";
import MainContext from "../../../contexts/main.context";
import "./style.scss";
import Group from "../../../components/Group/Group";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";

const GroupsPage = () => {
  const { groups } = React.useContext(MainContext);

  return (
    <div className="GroupsPage">
      <div className="GroupsPage__wrapper">
        {groups &&
          groups.length > 0 &&
          groups.map((group) => <Group key={group.id} group={group} />)}
      </div>
    </div>
  );
};

export default withErrorBoundary(GroupsPage);

import React from "react";
import PropTypes from "prop-types";
import VCard from "../../material/VCard";
import "./style.scss";
import VDeleteIcon from "../../material/icons/VDeleteIcon";
import VEditIcon from "../../material/icons/VEditIcon";
import { urlsConst } from "../../constants/urlsConst";
import VLink from "../../material/VLink/VLink";
import MainContext from "../../contexts/main.context";
import { LogService } from "../../services/LogService";
import { GroupDBService } from "../../services/GroupDBService";

const Group = ({ group }) => {
  const {
    showConfirmation,
    showEditGroupPopup,
    onRemoveGroup,
  } = React.useContext(MainContext);

  const groupRemove = async () => {
    try {
      await GroupDBService.removeGroup(group);
      onRemoveGroup(group);
    } catch (e) {
      LogService.showAndLogError("groupRemove error", e);
    }
  };

  return (
    <VCard className="Group">
      <div className="Group__badge">{group.wordCounter}</div>
      <div className="Group__buttons">
        <VEditIcon children="edit" onClick={() => showEditGroupPopup(group)} />
        {!group.cannotDelete && (
          <VDeleteIcon
            children="remove"
            onClick={() => showConfirmation(groupRemove)}
          />
        )}
      </div>
      <img className="Group__pic clickable" src={group.pic} alt="" />
      <div className="Group__info">
        <VLink to={`${urlsConst.group}${group.id}`} children={group.name} />
        <p className="description">{group.description}</p>
      </div>
    </VCard>
  );
};

Group.propTypes = {
  group: PropTypes.object.isRequired,
};

export default Group;

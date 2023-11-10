import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "../../common-components/ProjectCard";

const EntityView = ({ entity }) => {
  return <Card>{JSON.stringify(entity)}</Card>;
};

EntityView.propTypes = {
  entity: PropTypes.object.isRequired,
};

export default EntityView;

import React from "react";
import PropTypes from "prop-types";
import Card from "../../common-components/Card";

const EntityView = ({ entity }) => {
  return <Card>{JSON.stringify(entity)}</Card>;
};

EntityView.propTypes = {
  entity: PropTypes.object.isRequired,
};

export default EntityView;

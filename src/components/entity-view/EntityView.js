import React from "react";
import CardComponent from "../../common-components/CardComponent";

const EntityView = ({ entity }) => {
  return <Card>{JSON.stringify(entity)}</Card>;
};


export default EntityView;

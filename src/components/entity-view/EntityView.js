import React from "react";
import CardComponent from "../library-based-components/CardComponent";

const EntityView = ({ entity }) => {
  return <Card>{JSON.stringify(entity)}</Card>;
};

export default EntityView;

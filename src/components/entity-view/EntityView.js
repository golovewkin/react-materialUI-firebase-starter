import React from "react";
import CardComponent from "../library-based-components/CardComponent";

const EntityView = ({ entity }) => {
  return <CardComponent>{JSON.stringify(entity)}</CardComponent>;
};

export default EntityView;

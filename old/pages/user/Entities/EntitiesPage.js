import React from "react";
import "./style.scss";
import Entity from "../../../components/Entity/Entity";
import { withErrorBoundary } from "../../../components/hoc/withErrorBoundary/withErrorBoundary";

const EntitiesPage = () => {
  // TODO check if user exists
  // get entities
  const entities = [];
  return (
    <div className="EntitiesPage">
      <div className="EntitiesPage__wrapper">
        {entities &&
          entities.length > 0 &&
          entities.map((entity) => <Entity key={entity.id} entity={entity} />)}
      </div>
    </div>
  );
};

export default withErrorBoundary(EntitiesPage);

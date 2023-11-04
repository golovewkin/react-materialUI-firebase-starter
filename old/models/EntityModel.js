import { LogService } from "../services/LogService";

export class EntityModel {
  constructor(entity) {
    this.validate(entity);
    this.id = entity.id;
    this.ownerId = entity.ownerId;
    this.createdAt = Date.now();
  }

  id;
  ownerId;
  collection;
  createdAt;

  validate(entity) {
    this.validateCustom(entity);
    if (!entity.id) throw new Error("no entity.id");
    if (!entity.ownerId) throw new Error("no entity.ownerId");
    if (!entity.collection) throw new Error("no entity.collection");
  }

  validateCustom(entity) {
    console.log("validate something with entity", entity);
  }

  save() {
    try {
    } catch (e) {
      LogService.showAndLogError("save entity error", e);
    }
  }

  update() {
    try {
    } catch (e) {
      LogService.showAndLogError("update entity error", e);
    }
  }

  delete() {
    try {
    } catch (e) {
      LogService.showAndLogError("delete entity error", e);
    }
  }
}

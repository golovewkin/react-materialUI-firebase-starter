import { DataBaseService } from "../services/DataBaseService";

export class EntityModel {
  static collection = "";
  constructor(entity) {
    this.validate(entity);
    this.id = entity.id;
    this.ownerId = entity.ownerId;
    this.createdAt = Date.now();
  }

  id;
  ownerId;
  createdAt;

  validate(entity) {
    this.validateCustom(entity);
    if (!entity.id) throw new Error("no entity.id");
    if (!entity.ownerId) throw new Error("no entity.ownerId");
    if (!entity.collection) throw new Error("no entity.collection");
  }

  validateCustom(entity) {
    throw new Error("validate something in specific entity");
  }

  create() {
    this.validate(this);
    console.log(this);
    // TODO save in DB
  }

  update() {
    this.validate(this);
  }

  delete() {
    // TODO remove from DB
  }

  static async getById(id, collection) {
    const entityData = await DataBaseService.getDocumentById(id, collection);
    return new EntityModel(entityData);
  }
}

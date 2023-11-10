import { LogService } from "../services/LogService";
import {DataBaseService} from "../services/DataBaseService";

export class EntityModel {
  static collection = '';
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
    throw new Error('validate something in specific entity');
  }

  create() {
    try {
      this.validate(this);
    } catch (e) {
      LogService.showAndLogError("save entity error", e);
    }
  }

  update() {
    try {
      this.validate(this);
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

  static async getEntityById(id){
    const entityData = await DataBaseService.getDocumentById(id);
    return new EntityModel(entityData)
  }
}

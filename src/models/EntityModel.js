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
    if (!entity.id) throw new Error("no entity.id");
    this.validateCustom(entity);
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
}

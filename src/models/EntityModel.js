export class EntityModel {
  static collection = "";
  constructor(entity) {
    this.validate(entity);
    this.id = entity.id;
    this.createdAt = Date.now();
  }

  id;
  createdAt;

  validate(entity) {
    if (!entity.id) throw new Error("no entity.id");
    this.validateCustom(entity);
  }

  validateCustom(entity) {
    throw new Error("validate something in specific entity");
  }

  static async create(user) {
    throw new Error("static create method should be implemented");
  }

  async update() {
    this.validate(this);
  }

  async delete() {
    // TODO remove from DB
  }
}

export class EntityModel {
  static collection = "";
  constructor(entity) {
    this.validate(entity);
    this.id = entity.id;
    this.createdAt = entity.createdAt || Date.now();
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

  copy() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  toString() {
    let jsoned = {};
    let toConvert = this;
    Object.getOwnPropertyNames(toConvert).forEach((prop) => {
      const val = toConvert[prop];
      // don't include those
      if (prop === "toJSON" || prop === "constructor") {
        return;
      }
      if (typeof val === "function") {
        jsoned[prop] = val.bind(jsoned);
        return;
      }
      jsoned[prop] = val;
    });

    return jsoned;
  }
  static async create(user) {
    throw new Error("static create method should be implemented");
  }

  async update() {
    throw new Error("update method should be implemented");
  }

  async delete() {
    throw new Error("delete method should be implemented");
  }
}

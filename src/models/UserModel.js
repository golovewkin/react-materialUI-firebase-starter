import { ROLES } from "../constants/ROLES";
import { COMMON } from "../constants/COMMON";
import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class UserModel extends EntityModel {
  static collection = COLLECTIONS.USERS;
  constructor(user) {
    super(user);
    this.name = user.name || "My first name";
    this.firebaseId = user.firebaseId;
    this.pic = user.pic || COMMON.NO_PIC_USER;
    this.role = user.role || ROLES.USER;
  }

  validateCustom(user) {
    if (!user.firebaseId) {
      throw new Error("no firebaseId");
    }
  }
  static async create(model) {
    this.validate(model);
    // UserModel.validate;
    console.log(model);
    // const firebaseUser = await admin.auth().createUser({
    //   email,
    //   password,
    // });
    //TODO createUserWithEmailAndPassword
    // TODO save in DB
    // TODO return new UserModel()
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, UserModel.collection);
  }

  static async getById(id) {
    const entityData = await DBService.getDocumentById(
      id,
      UserModel.collection,
    );
    return new UserModel(entityData);
  }
}

import { USER_ROLES } from "../constants/USER_ROLES";
import { COMMON } from "../constants/COMMON";
import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class UserModel extends EntityModel {
  static collection = COLLECTIONS.USERS;
  constructor(user) {
    super(user);
    this.name = user.name || "My name";
    this.firebaseId = user.firebaseId;
    this.id = user.id;
    this.pic = user.pic || COMMON.NO_PIC_USER;
    this.role = user.role || USER_ROLES.USER;
  }

  validateCustom(user) {
    if (!user.firebaseId) {
      throw new Error("no firebaseId");
    }
    if (!user.id) {
      throw new Error("no id");
    }
  }

  /**
   * This will login user automatically>}
   */
  static async createByEmailAndPassword({ email, password }) {
    const firebaseUser = await DBService.createUserByEmailAndPassword(email);
    const user = new UserModel({
      firebaseId: firebaseUser.user.uid,
      id: firebaseUser.user.uid,
    });
    await user.update();
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, UserModel.collection);
  }

  static async deleteEntity(id) {
    return DBService.removeDocument(UserModel.collection, id);
  }
}

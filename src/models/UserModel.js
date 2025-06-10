import { USER_ROLES } from "../constants/USER_ROLES.js";
import { COMMON } from "../constants/COMMON.js";
import { EntityModel } from "./EntityModel.js";
import { DBService } from "../services/DBService.js";
import { COLLECTIONS } from "../constants/COLLECTIONS.js";

export class UserModel extends EntityModel {
  static collection = COLLECTIONS.USERS;
  constructor(user) {
    super(user);
    this.name = user.name || "My name";
    this.firebaseId = user.firebaseId;
    this.pic = user.pic || COMMON.NO_PIC;
    this.role = user.role || USER_ROLES.USER;
  }

  validateCustom(user) {
    if (!user.firebaseId) {
      throw new Error("no firebaseId");
    }
    if (!user.role) {
      throw new Error("no role for this user");
    }

    if (!user.name) {
      throw new Error("no name for this user");
    }
  }

  static async resetPass(email) {
    return DBService.sendPasswordResetEmail(email);
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

  setName(name) {
    this.name = name;
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, UserModel.collection);
  }

  static async deleteEntity(id) {
    return DBService.removeDocument(UserModel.collection, id);
  }
}

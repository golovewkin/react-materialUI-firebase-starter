import { ROLES } from "../constants/ROLES";
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
    this.role = user.role || ROLES.USER;
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
   * This will login user automatically
   * @param email
   * @returns {Promise<{password: string, email}>}
   */
  static async createByEmail({ email, password }, inviteId) {
    const { password, firebaseUser } = await DBService.createUserByEmail(email);
    const user = new UserModel({
      firebaseId: firebaseUser.user.uid,
      id: firebaseUser.user.uid,
    });
    await user.update();
    return { password, email };
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

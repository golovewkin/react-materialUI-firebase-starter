import { userRolesConst } from "../constants/userRolesConst";
import { commonConst } from "../constants/commonConst";
import { EntityModel } from "./EntityModel";

export class UserModel extends EntityModel {
  constructor(user) {
    super();
    this.firebaseId = user.firebaseId;
    this.name = user.name || "My first name";
    this.pic = user.pic || commonConst.noPicUser;
    this.role = userRolesConst.user;
  }

  validateCustom(user) {
    if (!user.firebaseId) throw new Error("no user.id");
    if (user.role !== userRolesConst.user)
      throw new Error("incorrect user role");
  }
}

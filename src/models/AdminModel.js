import { userRolesConst } from "../constants/userRolesConst";
import { commonConst } from "../constants/commonConst";
import { EntityModel } from "./EntityModel";

export class AdminModel extends EntityModel {
  constructor(user) {
    super();
    this.name = user.name || "My first name";
    this.pic = user.pic || commonConst.noPicUser;
    this.role = userRolesConst.admin;
    this.collection = 'users';
  }

  validateCustom(user) {
    if (user.role !== userRolesConst.admin)
      throw new Error("incorrect user role");
  }
}

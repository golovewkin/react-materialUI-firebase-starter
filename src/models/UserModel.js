import { userRolesConst } from "../constants/userRolesConst";
import { commonConst } from "../constants/commonConst";

export class UserModel {
  constructor(user) {
    if (!user.firebaseId) throw new Error("no user.id");
    this.firebaseId = user.firebaseId;

    this.name = user.name || "My first name";
    this.pic = user.pic || commonConst.noPicUser;
    this.role = user.role || userRolesConst.user;
    this.createdAt = user.createdAt || Date.now();
    this.custom = "";
  }

  role;
  id;
  firebaseId;
  createdAt;
  name;
  pic;
  custom;
}

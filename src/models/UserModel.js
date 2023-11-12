import { userRolesConst } from "../constants/userRolesConst";
import { commonConst } from "../constants/commonConst";
import { EntityModel } from "./EntityModel";
import { DataBaseService } from "../services/DataBaseService";

export class UserModel extends EntityModel {
  static collection = "users";
  constructor(user) {
    super(user);
    this.name = user.name || "My first name";
    this.pic = user.pic || commonConst.noPicUser;
    this.role = userRolesConst.user;
  }

  validateCustom(user) {
    if (!user.firebaseId) {
      throw new Error("no firebaseId");
    }
  }
  static async create(user) {
    // this.validate(this);
    // UserModel.validate;
    console.log(user);
    // TODO save in DB
    // TODO return new UserModel()
    // createUserWithEmailAndPassword
    // then save it tp db
  }

  static async getById(id) {
    const entityData = await DataBaseService.getDocumentById(
      id,
      UserModel.collection,
    );
    return new UserModel(entityData);
  }
}

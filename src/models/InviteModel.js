import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class InviteModel extends EntityModel {
  static collection = COLLECTIONS.invites;
  constructor(invite) {
    super(invite);
    this.taken = invite.taken || false;
  }

  validateCustom(invite) {
    if (!invite.createdAt) {
      throw new Error("no createdAt");
    }
  }
  static async create(model) {
    this.validate(model);
    // UserModel.validate;
    console.log(model);
    //TODO createUserWithEmailAndPassword
    // TODO save in DB
    // TODO return new UserModel()
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, InviteModel.collection);
  }

  static async getById(id) {
    const entityData = await DBService.getDocumentById(
      id,
      InviteModel.collection,
    );
    return new InviteModel(entityData);
  }
}

import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class RequestModel extends EntityModel {
  static collection = COLLECTIONS.REQUESTS;
  constructor(invite) {
    super(invite);
    this.email = invite.email;
  }

  validateCustom(request) {
    if (!request.email) {
      throw new Error("no email");
    }
  }
  static async create(model) {
    this.validate(this);
    return DBService.saveDocumentById(this, RequestModel.collection);
    console.log(model);
    //TODO createUserWithEmailAndPassword
    // TODO save in DB
    // TODO return new UserModel()
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, RequestModel.collection);
  }

  static async getById(id) {
    const entityData = await DBService.getDocumentById(
      id,
      RequestModel.collection,
    );
    return new RequestModel(entityData);
  }
}

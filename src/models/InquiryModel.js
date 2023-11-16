import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class InquiryModel extends EntityModel {
  static collection = COLLECTIONS.INQUIRIES;
  constructor(inquiry) {
    super(inquiry);
    this.email = inquiry.email;
  }

  static getModel(data) {
    return new InquiryModel(data);
  }

  validateCustom(inquiry) {
    if (!inquiry.email) {
      throw new Error("no email");
    }
  }
  static async create(model) {
    // TODO check we dont have this request

    return DBService.createDocument(
      model,
      InquiryModel.collection,
      InquiryModel.getModel,
    );
  }

  update() {
    this.validate(this);
    return DBService.saveDocumentById(this, InquiryModel.collection);
  }

  static async getById(id) {
    const entityData = await DBService.getDocumentById(
      id,
      InquiryModel.collection,
    );
    return new InquiryModel(entityData);
  }
}

import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";

export class InquiryModel extends EntityModel {
  static collection = COLLECTIONS.INQUIRIES;
  constructor(inquiry) {
    super(inquiry);
    this.email = inquiry.email;
    this.message = inquiry.message;
  }

  validateCustom(inquiry) {
    if (!inquiry.email) {
      throw new Error("no email");
    }
  }
  static async create(model) {
    const find = await DBService.getDocumentWhere(
      InquiryModel.collection,
      "email",
      model.email,
    );

    if (find) {
      throw new Error("This request exists!");
    }

    return DBService.createDocument(
      model,
      InquiryModel.collection,
      (data) => new InquiryModel(data),
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

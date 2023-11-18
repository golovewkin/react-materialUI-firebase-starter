import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";
import { INQUIRY_STATUSES } from "../constants/INQUIRY_STATUSES";

export class InquiryModel extends EntityModel {
  static collection = COLLECTIONS.INQUIRIES;
  constructor(inquiry) {
    super(inquiry);
    this.email = inquiry.email;
    this.message = inquiry.message;
    this.status = inquiry.status;
  }

  validateCustom(inquiry) {
    if (!inquiry.email) {
      throw new Error("no email");
    }
    if (!inquiry.status) {
      throw new Error("no status");
    }

    if (
      inquiry.status !== INQUIRY_STATUSES.APPROVED &&
      inquiry.status !== INQUIRY_STATUSES.CREATED
    ) {
      throw new Error("wrong status");
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

    return DBService.createOrSetDocument(
      model,
      InquiryModel.collection,
      (data) => new InquiryModel(data),
    );
  }

  setStatus(status) {
    this.status = status;
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

  static async deleteEntity(id) {
    return DBService.removeDocument(InquiryModel.collection, id);
  }

  static async acceptByInquiryId(email, inquiryId) {
    debugger;
    const inquiry = await InquiryModel.getById(inquiryId);
    if (
      !inquiry ||
      inquiry.email !== email ||
      inquiry.status !== INQUIRY_STATUSES.APPROVED
    ) {
      throw new Error("Wrong request!");
    }
    inquiry.setStatus(INQUIRY_STATUSES.TAKEN);
    await inquiry.update();
  }
}

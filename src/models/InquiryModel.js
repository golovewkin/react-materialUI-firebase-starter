import { EntityModel } from "./EntityModel";
import { DBService } from "../services/DBService";
import { COLLECTIONS } from "../constants/COLLECTIONS";
import { INQUIRY_STATUSES, INQUIRY_TYPES } from "../constants/INQUIRY";

export class InquiryModel extends EntityModel {
  static collection = COLLECTIONS.INQUIRIES;
  constructor(inquiry) {
    super(inquiry);
    this.email = inquiry.email;
    this.message = inquiry.message || "";
    this.status = inquiry.status;
    this.type = inquiry.type;
  }

  validateCustom(inquiry) {
    if (!inquiry.email) {
      throw new Error("no email");
    }
    if (!inquiry.status) {
      throw new Error("no status");
    }

    if (
      inquiry.status !== INQUIRY_STATUSES.DONE &&
      inquiry.status !== INQUIRY_STATUSES.CREATED
    ) {
      throw new Error("wrong status");
    }
    if (
      inquiry.type !== INQUIRY_TYPES.REQUEST &&
      inquiry.type !== INQUIRY_TYPES.INVITE
    ) {
      throw new Error("wrong type");
    }
  }
  static async create(modelData) {
    const find = await DBService.getDocumentWhere(
      InquiryModel.collection,
      "email",
      modelData.email,
    );

    if (find) {
      throw new Error("This request exists!");
    }

    return DBService.createDocument(
      { ...modelData, status: INQUIRY_STATUSES.CREATED },
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

  static async doneByInquiryId(email, inquiryId) {
    const inquiry = await InquiryModel.getById(inquiryId);
    if (
      !inquiry ||
      inquiry.email !== email ||
      inquiry.status !== INQUIRY_STATUSES.CREATED
    ) {
      throw new Error("Wrong request!");
    }
    inquiry.setStatus(INQUIRY_STATUSES.DONE);
    await inquiry.update();
  }
}

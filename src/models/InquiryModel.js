import { EntityModel } from "./EntityModel.js";
import { DBService } from "../services/DBService.js";
import { COLLECTIONS } from "../constants/COLLECTIONS.js";
import { INQUIRY_STATUSES, INQUIRY_TYPES } from "../constants/INQUIRY.js";

export class InquiryModel extends EntityModel {
  static collection = COLLECTIONS.INQUIRIES;
  constructor(inquiry) {
    super(inquiry);
    this.email = inquiry.email;
    this.status = inquiry.status;
    this.firebaseId = inquiry.firebaseId;
    this.type = inquiry.type;
  }

  validateCustom(inquiry) {
    if (!inquiry.email) {
      throw new Error("no email");
    }
    if (!inquiry.status) {
      throw new Error("no status");
    }
    if (!inquiry.firebaseId) {
      throw new Error("no firebaseId");
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

  static async deleteEntity(id) {
    return DBService.removeDocument(InquiryModel.collection, id);
  }

  static async checkInviteByInquiryId(email, inquiryId) {
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

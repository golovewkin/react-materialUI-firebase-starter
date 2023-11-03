import { DataBaseService } from "./DataBaseService";
import { collections } from "../constants/collections";
import { classToObject } from "../helpers/util.helper";

export class GroupDBService {
  static getUserGroups(user) {
    return DataBaseService.getDocumentsWhere(
      collections.groups,
      "ownerId",
      user.id
    );
  }

  static createGroup(group) {
    return DataBaseService.updateDocument(
      classToObject(group),
      collections.groups,
      group.id
    );
  }

  static editGroup(group) {
    return DataBaseService.updateDocument(
      classToObject(group),
      collections.groups,
      group.id
    );
  }

  static removeGroup(group) {
    return DataBaseService.removeDocument(collections.groups, group);
  }
}

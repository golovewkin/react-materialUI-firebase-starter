import { DBService } from "../DBService";
import { collections } from "../../src/constants/collections";
import { classToObject } from "../../helpers/util.helper";

export class EntityDBService {
  static getUserGroups(user) {
    return DBService.getDocumentsWhere(collections.groups, "ownerId", user.id);
  }

  static createGroup(group) {
    return DBService.updateDocument(
      classToObject(group),
      collections.groups,
      group.id,
    );
  }

  static editGroup(group) {
    return DBService.updateDocument(
      classToObject(group),
      collections.groups,
      group.id,
    );
  }

  static removeGroup(group) {
    return DBService.removeDocument(collections.groups, group);
  }
}

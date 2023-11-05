import { DataBaseService } from "./DataBaseService";
import { collections } from "../../src/constants/collections";
import { classToObject, makeId } from "../helpers/util.helper";
import { UserModel } from "../models/UserModel";
import { LogService } from "./LogService";
import { EntityDBService } from "./EntityDBService";


export class UserDBService {
  static url = '/users/'
  static createUser(body) {
    return HttpService.post(`${UserDBService.url}create`, body);
  }

  static async getUserByFirebaseId(id) {
    try {
      const res = await DataBaseService.getDocumentsWhere(
        collections.users,
        "id",
        id
      );
      if (res[0]) {
        return res[0];
      } else {
        const newUser = new UserModel({ id: id, ownerId: id });
        await DataBaseService.addDocument(
          classToObject(newUser),
          collections.users,
          id
        );
        const defaultGroup = new GroupModel({
          id: makeId(),
          ownerId: id,
          name: "Default",
          cannotDelete: true,
        });
        await EntityDBService.createGroup(defaultGroup);
        return newUser;
      }
    } catch (e) {
      LogService.showAndLogError("get user error", e);
      throw e;
    }
  }

  static updateUser(id, user) {
    return DataBaseService.updateDocument(
      classToObject(user),
      collections.users,
      id
    );
  }
}

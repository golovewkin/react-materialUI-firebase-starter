import { DataBaseService } from "./DataBaseService";
import { classToObject } from "../helpers/util.helper";
import { collections } from "../constants/collections";

export class LogService {
  static showMessage;
  static async logError(description, entityOrError) {
    try {
      console.error(description, entityOrError);

      //no need logging local dev errors
      if (process.env.NODE_ENV === "development") {
        return;
      }

      entityOrError.metadata = `URL: ${window.location.href}; error:  ${description}`;
      entityOrError.createdAt = Date.now();
      // There could be your error saving
    } catch (e) {
      console.error("save error error", e);
    }
  }

  static showAndLogError(description, error) {
    LogService.logError(...arguments);

    const message = error && error.message ? error.message : description;
    LogService.showMessage(message, true);
  }
}

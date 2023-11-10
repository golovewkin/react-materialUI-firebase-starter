export class LogService {
  static async log(description, entityOrError) {
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
}

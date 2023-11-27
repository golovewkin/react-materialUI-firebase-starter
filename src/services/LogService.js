export class LogService {
  static log(description, entityOrError, showError) {
    try {
      console.error(description, entityOrError);
      if (showError) {
        const messageToShow = entityOrError.message
          ? entityOrError.message
          : entityOrError;
        showError({ title: description, content: messageToShow });
      }

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

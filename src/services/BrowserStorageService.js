export class BrowserStorageService {
  static setData(prop, data) {
    console.log(data);
    if (typeof data !== "string") {
      throw new Error("BrowserStorageService can work only with strings");
    }
    localStorage.setItem(prop, data);
  }

  static getData(prop) {
    return localStorage.getItem(prop);
  }

  static removeData(prop) {
    localStorage.removeItem(prop);
  }
}

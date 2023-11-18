import { BrowserStorageService } from "./BrowserStorageService";
import { COMMON } from "../constants/COMMON";

class SecurityService {
  static checkIfUserCanSendRequest() {
    const previousRequestDate = BrowserStorageService.getData(
      COMMON.REQUEST_SENT,
    );

    // 100000ms == 100 seconds
    if (Date.now() < previousRequestDate + 100000) {
      throw new Error("You are sending requests too often!");
    }
    BrowserStorageService.setData(COMMON.REQUEST_SENT, Date.now().toString());
  }
}

export default SecurityService;

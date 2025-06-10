import { BrowserStorageService } from "./BrowserStorageService.js";
import { COMMON } from "../constants/COMMON.js";

class SecurityService {
  static checkIfUserCanSendRequest() {
    const previousRequestDate = BrowserStorageService.getData(
      COMMON.REQUEST_SENT,
    );

    if (!previousRequestDate) {
      return true;
    }
    // 100000ms == 100 seconds
    if (Date.now() < Number(previousRequestDate) + 100000) {
      throw new Error("You are sending requests too often!");
    }

    BrowserStorageService.setData(COMMON.REQUEST_SENT, Date.now().toString());
  }
}

export default SecurityService;

import { LogService } from "./LogService.js";

class ClipboardService {
  static async copyToClipboard(text, successCb) {
    try {
      await navigator.clipboard.writeText(text);

      successCb();
    } catch (e) {
      LogService.log("copy to clip board error", e);
    }
  }
}

export default ClipboardService;

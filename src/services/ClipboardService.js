import { LogService } from "./LogService";

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

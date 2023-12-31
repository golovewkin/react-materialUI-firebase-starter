import {makeId} from "../helpers/util.helper";
import {storage, storageRef, getDownloadURL, uploadBytes} from "./firebase";

export class PicService {
  static maxFileSize = 300000;

  static getExtension(path) {
    // extract file name from full path ...
    const basename = path.split(/[\\/]/).pop();

    // (supports `\\` and `/` separators)
    // get last position of `.`
    const pos = basename.lastIndexOf(".");

    // if file name is empty or ...
    //  `.` not found (-1) or comes first (0)
    if (basename === "" || pos < 1) {
      return "";
    }

    return basename.slice(pos + 1);
  }

  static savePic(file) {
    return new Promise(function(resolve, reject) {
      if (file.size > PicService.maxFileSize) {
        return reject(new Error("too big!"));
      }

      const ref = storageRef(storage, `images/${makeId()}.${PicService.getExtension(file.name)}`);
      const metadata = {
        contentType: file.type,
      };

      uploadBytes(ref, file, metadata).then((imageRef) => {
        getDownloadURL(imageRef.ref).then(url => {
          resolve(url);
        }).catch(err => reject(err));
      }).catch(err => reject(err));
    });
  }

  static getBase64(file) {
    return new Promise((resolve, reject) => {
      if (file.size > PicService.maxFileSize)
        return reject(new Error("too big!"));

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}

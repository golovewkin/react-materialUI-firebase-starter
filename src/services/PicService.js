import firebase from './firebase';

export class PicService {
  static maxFileSize = 300000;

  static savePic(file) {
    return new Promise(function(resolve, reject) {
      if (file.size > PicService.maxFileSize) return reject(new Error('too big!'));

      const storageRef = firebase.storage().ref();
      const metadata = {
        contentType: file.type
      };

      const uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

      uploadTask.on('state_changed',
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case firebase.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case firebase.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        }, function(error) {
          reject(error);

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
            default:
            // Unknown error occurred
          }
        }, function() {
          uploadTask.snapshot.ref.getDownloadURL()
            .then(function(downloadURL) {
              resolve(downloadURL);
          });
        });
    });
  }

  static getBase64(file) {
    return new Promise((resolve, reject) => {
      if (file.size > PicService.maxFileSize) return reject(new Error('too big!'));

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}

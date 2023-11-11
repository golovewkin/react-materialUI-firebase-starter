import { doc, getDoc, db } from "./firebase";

export class DataBaseService {
  static addDocument(document, collection, id) {
    // return firebase.firestore().collection(collection).doc(id).set(document);
  }

  static addDocumentWithoutId(document, collection) {
    // return firebase.firestore().collection(collection).add(document);
  }

  static async getDocumentById(collection, id) {
    // const docRef = db.collection(collection).doc(id);
    // const doc = await docRef.get();
    // if (doc.exists) {
    //   return doc.data();
    // } else {
    //   return null;
    // }

    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  static async getDocumentsWhere(collection, property, value) {
    // const res = await firebase
    //   .firestore()
    //   .collection(collection)
    //   .where(property, "==", value)
    //   .get();
    // const docs = [];
    // res.forEach((doc) => {
    //   docs.push(doc.data());
    // });
    // return docs;
  }

  static updateDocument(document, collection, id) {
    return db.collection(collection).doc(id).set(document);
  }

  static removeDocument(collection, document) {
    return db.collection(collection).doc(document.id).delete();
  }
}

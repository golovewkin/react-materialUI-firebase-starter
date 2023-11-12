import { doc, getDoc, db, setDoc } from "./firebase";

export class DataBaseService {
  static addDocument(document, collection, id) {
    // return firebase.firestore().collection(collection).doc(id).set(document);
  }

  static addDocumentWithoutId(document, collection) {
    // return firebase.firestore().collection(collection).add(document);
  }

  static async getDocumentById(id, collection) {
    const docSnap = await getDoc(doc(db, collection, id));
    return docSnap.exists() ? docSnap.data() : null;
  }

  static async getAll(collection, filter) {
    const docSnap = await getDoc(doc(db, collection));
    return docSnap.exists() ? docSnap.data() : null;
  }

  static saveDocumentById(model, collection) {
    if (typeof model.id !== "string") {
      throw new Error("id should be a string");
    }
    if (typeof collection !== "string") {
      throw new Error("collection should be a string");
    }
    return setDoc(doc(db, collection, model.id), model.toString());
  }

  static removeDocument(collection, document) {
    return db.collection(collection).doc(document.id).delete();
  }
}

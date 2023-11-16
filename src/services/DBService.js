import { doc, getDoc, db, setDoc, getDocs, collection } from "./firebase";

export class DBService {
  static async createDocument(model, collectionName, getModelCb) {
    const newDocRef = doc(collection(db, collectionName));
    const newModel = getModelCb({ ...model, id: newDocRef.id });
    debugger;
    return setDoc(newDocRef, newModel.toString());
  }

  static async getDocumentById(id, collection) {
    const docSnap = await getDoc(doc(db, collection, id));
    return docSnap.exists() ? docSnap.data() : null;
  }

  static async getAll(collectionName) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return documents;
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
    // return db.collection(collection).doc(document.id).delete();
  }
}

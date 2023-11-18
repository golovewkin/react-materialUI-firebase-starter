import {
  doc,
  getDoc,
  db,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  createUserWithEmailAndPassword,
  auth,
  addDoc,
} from "./firebase";
import { makeId } from "../helpers/util.helper";

export class DBService {
  static getDocumentsFromSnapshot(querySnapshot) {
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return documents;
  }

  static async createDocument(model, collectionName, getModelCb) {
    const newDocRef = doc(collection(db, collectionName));
    debugger;
    const newModel = getModelCb({
      ...model,
      id: newDocRef.id,
      firebaseId: newDocRef.id,
    });
    debugger;
    await setDoc(newDocRef, newModel.toString());
    return newModel;
  }

  static async createDocumentWithId(model, collectionName) {
    await addDoc(collection(db, collectionName), model.toString());
    return model;
  }

  static async getDocumentById(id, collection) {
    const docSnap = await getDoc(doc(db, collection, id));
    return docSnap.exists() ? docSnap.data() : null;
  }

  static async getAll(collectionName) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return DBService.getDocumentsFromSnapshot(querySnapshot);
  }

  static async getDocumentWhere(collectionName, prop, value) {
    const q = query(collection(db, collectionName), where(prop, "==", value));
    const querySnapshot = await getDocs(q);
    return DBService.getDocumentsFromSnapshot(querySnapshot)[0];
  }

  static async getDocumentsWhere(collectionName, prop, value) {
    const q = query(collection(db, collectionName), where(prop, "==", value));
    const querySnapshot = await getDocs(q);
    return DBService.getDocumentsFromSnapshot(querySnapshot);
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

  static removeDocument(collectionName, id) {
    return deleteDoc(doc(db, collectionName, id));
  }

  static async createUserByEmail(email) {
    const password = makeId();
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { firebaseUser, password };
  }
}

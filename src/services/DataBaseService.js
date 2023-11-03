import firebase from './firebase';

export class DataBaseService {
  static addDocument(document, collection, id) {
    return firebase.firestore().collection(collection).doc(id).set(document);
  }

  static addDocumentWithoutId(document, collection) {
    return firebase.firestore().collection(collection).add(document);
  }

  static async getDocumentById(collection, id) {
    const docRef = firebase.firestore().collection(collection).doc(id);
    const doc = await docRef.get();
    if (doc.exists){
      return doc.data();
    } else {
      throw new Error('No such document!');
    }
  }

  static async getDocumentsWhere(collection, property, value) {
    const res = await firebase.firestore().collection(collection).where(property, "==", value).get();
    const docs = [];
    res.forEach(doc => {
      docs.push(doc.data());
    });
    return docs;
  }

  static updateDocument(document, collection, id) {
    return firebase.firestore().collection(collection).doc(id).set(document);
  }

  static removeDocument(collection, document) {
    return firebase.firestore().collection(collection).doc(document.id).delete();
  }

  static transaction(document) {
// Create a reference to the SF doc.
//     var sfDocRef = db.collection("cities").doc("SF");
//
// // Uncomment to initialize the doc.
// // sfDocRef.set({ population: 0 });
//
//     return db.runTransaction(function(transaction) {
//       // This code may get re-run multiple times if there are conflicts.
//       return transaction.get(sfDocRef).then(function(sfDoc) {
//         if (!sfDoc.exists) {
//           throw "Document does not exist!";
//         }
//
//         // Add one person to the city population.
//         // Note: this could be done without a transaction
//         //       by updating the population using FieldValue.increment()
//         var newPopulation = sfDoc.data().population + 1;
//         transaction.update(sfDocRef, { population: newPopulation });
//       });
//     }).then(function() {
//       console.log("Transaction successfully committed!");
//     }).catch(function(error) {
//       console.log("Transaction failed: ", error);
//     });
  }
}

import admin from "firebase-admin";
import config from "./config/config.json" with {type: "json"};
import generator from "generate-password";
import {getFirestore} from "firebase-admin/firestore";

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: config.databaseURL,
});

const createAdmin = async (email) => {
  try {
    if (!email) throw new Error("no email!");

    const password =
      generator.generate({
        length: 12,
        numbers: true,
      }) + randomIntFromInterval(1, 20);

    const firebaseUser = await admin.auth().createUser({
      email,
      password,
    });

    const data = {
      name: "Admin",
      role: "admin",
      firebaseId: firebaseUser.uid,
      id: firebaseUser.uid,
      createdAt: Date.now(),
    };
    const db = getFirestore();
    const docRef = db.collection("users").doc(firebaseUser.uid);
    await docRef.set(data);
    console.log(`admin was created with email: ${email}\npassword: ${password}`);
  } catch (e) {
    console.log("error", e);
  }
};

void createAdmin(process.argv[2]); // eslint-disable-line no-undef

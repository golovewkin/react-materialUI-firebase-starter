const admin = require("firebase-admin");
const config = require("./config/config.json");
const generator = require("generate-password");
const { getFirestore } = require("firebase-admin/firestore");

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: config.databaseURL,
});

const createUser = async (email) => {
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

    const adminData = {
      name: "My name",
      role: "user",
      firebaseId: firebaseUser.uid,
      id: firebaseUser.uid,
      createdAt: Date.now(),
    };
    const db = getFirestore();
    const docRef = db.collection("users").doc(firebaseUser.uid);
    await docRef.set(adminData);
    console.log(`user was created with email: ${email}\npassword: ${password}`);
  } catch (e) {
    console.log("error", e);
  }
};

createUser(process.argv[2]);

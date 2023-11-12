const admin = require("firebase-admin");
const config = require("./config/config.json");
const generator = require("generate-password");
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
  databaseURL: config.databaseURL,
});

const createUser = async (email) => {
  try {
    if (!email) throw new Error("no email!");

    const password = generator.generate({
      length: 12,
      numbers: true,
    });
    const firebaseUser = await admin.auth().createUser({
      email,
      password,
    });

    const adminData = {
      name: "Admin",
      role: "admin",
      firebaseId: firebaseUser.uid,
      id: firebaseUser.uid,
      createdAt: Date.now(),
    };
    const db = getFirestore();
    const docRef = db.collection("users").doc(firebaseUser.uid);
    await docRef.set(adminData);
    console.log(
      `admin was created with:\n email:${email}\npassword:${password}`,
    );
  } catch (e) {
    console.log("error", e);
  }
};

createUser(process.argv[2]);

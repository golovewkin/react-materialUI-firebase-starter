const admin = require("firebase-admin");
const config = require("./config/config.json");
const generator = require("generate-password");
const { AdminModel } = require("./src/models/AdminModel");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const createUser = async (email) => {
  try {
    if (!email) throw new Error("no email!");

    const password = generator.generate({
      length: 10,
    });
    // const firebaseUser = await admin.auth().createUser({
    //   email,
    //   password,
    // });

    const userData = new AdminModel({
      name: "Admin",
      firebaseId: "firebaseUser.uid",
    });
    await userData.create();
    console.log(
      `admin was created with:\n email:${email}\npassword:${password}`,
    );
  } catch (e) {
    console.log("error", e);
  }
};

createUser(process.argv[2]);

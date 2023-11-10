const admin = require("firebase-admin");
const config = require("./config/config.json");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase),
});

const createUser = async (email) => {
  try {
    console.log(email);
    if (!email) throw new Error("no email!");
    // if (!password) throw new Error("no password!");

    // todo generate password  https://www.npmjs.com/package/generate-password
    const firebaseUser = await admin.auth().createUser({
      email,
      password: "romrrrroject!333",
    });
    //
    // const userData = {
    //   firebaseId: firebaseUser.uid,
    //   ownerId: adminId,
    //   role: userRoles.user,
    // };
  } catch (e) {
    console.log("error", e);
  }
};

createUser(process.argv[2]);

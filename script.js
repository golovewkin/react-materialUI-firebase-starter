const admin = require("firebase-admin");

const config = require("./config/config.json");
const serviceAccount = config.get("firebase:serviceAccount");
const databaseURL = config.get("firebase:databaseURL");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
});

const createUser = async (email, password) => {
  try {
    if (!email) throw new Error("no email!");
    // if (!password) throw new Error("no password!");

    // todo generate password  https://www.npmjs.com/package/generate-password
    // const firebaseUser = await admin.auth().createUser({
    //   email,
    //   password: "romrrrroject!333",
    // });
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

const args = process.env;
createUser(args);

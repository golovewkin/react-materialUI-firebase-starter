const firebaseAdmin = require("firebase-admin");
const createUser = async (email, password, role) => {
      if (!email) throw new Error ('no email!');
    if (!password) throw new Error ('no password!');
    if (!role) throw new Error ('no password!');

    const firebaseUser = await firebaseAdmin.auth().createUser({
      email: body.email,
      password: body.password,
    });

    const userData = {firebaseId: firebaseUser.uid, ownerId: adminId, role: userRoles.user};
}
const firebaseAdmin = require("firebase-admin");
const createUser = async (email, password, role) => {
  if (!email) throw new Error("no email!");
  if (!password) throw new Error("no password!");
  if (!role) throw new Error("no password!");

  const firebaseUser = await firebaseAdmin.auth().createUser({
    email: body.email,
    password: body.password,
  });

  const userData = {
    firebaseId: firebaseUser.uid,
    ownerId: adminId,
    role: userRoles.user,
  };
};

router.post("/captcha", async function (req, res) {
  try {
    const secret = config.get("captcha");
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${req.body.token}`;
    const response = await fetch(url, {
      method: "post",
    });
    const json = await response.json();
    if (!json.success) {
      return res.sendStatus(401);
    }
    res.send({ user: json.score > 0.5 });
  } catch (e) {
    LogService.logError(e);
    res.sendStatus(500);
  }
});

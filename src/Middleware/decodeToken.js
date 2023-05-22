const admin = require("../firebase/firebase-config");

const decodeToken = async (req, res, next) => {
  const headerAuth = req.headers.authorization;
  if (headerAuth) {
    const idToken = headerAuth.split(" ")[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(idToken);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
      return res.json({ message: "Un Authorize" });
    } catch (e) {
      return res.json({ message: e });
    }
  } else {
    return res.json({ message: "Un Authorize" });
  }
};

module.exports = decodeToken;

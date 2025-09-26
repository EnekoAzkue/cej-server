const { getAuth } = require("firebase-admin/auth");

function verifyIdToken(req, res, next) {
  const { idToken } = req.body;

  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const userEmail = decodedToken.email;
      res.locals.userEmail = userEmail;

      next();
    })
    .catch(() => {
      return res.status(500).send({
        status: "FAILED",
        data: { error: "The ID token is not valid or has expired." },
      });
    });
}

module.exports = {
  verifyIdToken,
};

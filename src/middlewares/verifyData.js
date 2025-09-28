const { getAuth } = require("firebase-admin/auth");

function verifyIdToken(req, res, next) {
  // Fake para pruebas
  res.locals.userEmail = "eneko.azkue@ikasle.aeg.eus";
  return next();

  /*
  const { idToken } = req.body;
  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      res.locals.userEmail = decodedToken.email;
      next();
    })
    .catch(() => {
      return res.status(500).send({
        status: "FAILED",
        data: { error: "The ID token is not valid or has expired." },
      });
    });
  */
}

module.exports = { verifyIdToken };

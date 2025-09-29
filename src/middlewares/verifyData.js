const { getAuth } = require("firebase-admin/auth");

async function verifyIdToken(req, res, next) {
  const { idToken } = req.body;

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        requestUri: `https://example.com${req.originalUrl}` /* TODO: Replace "example.com" with a valid value */,
        postBody: `id_token=${idToken}&providerId=google.com`,
        returnSecureToken: true,
      }),
    }
  );

  const { idToken: firebaseIdToken } = await response.json();

  getAuth()
    .verifyIdToken(firebaseIdToken)
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

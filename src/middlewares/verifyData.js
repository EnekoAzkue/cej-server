const { getAuth } = require("firebase-admin/auth");

async function verifyIdToken(req, res, next) {
  const { idToken } = req.body;
  console.log(`idToken recieved...` )

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "POST",
      body: JSON.stringify({
        requestUri: `https://cej-server.onrender.com${req.originalUrl}`,
        postBody: `id_token=${idToken}&providerId=google.com`,
        returnSecureToken: true,
      }),
    }
  );

  const { idToken: firebaseIdToken } = await response.json();

  getAuth()
    .verifyIdToken(firebaseIdToken)
    .then((decodedToken) => {
      res.locals.userEmail = decodedToken.email;
      console.log(`Valid idToken.`)
      next();
    })
    .catch(() => {
      console.log("Failed validating the token, token is not valid or expired.")
      return res.status(500).send({
        status: "FAILED",
        data: { error: "The ID token is not valid or has expired." },
      });
    });
  }


module.exports = { verifyIdToken };
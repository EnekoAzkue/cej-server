const express = require("express");
const router = express.Router();

const middleware = require("../middlewares/verifyData");
const userController = require("../controllers/userController");

// router.post(
//   "/access-logged-in",
//   middleware.verifyIdToken,
//   userController.updateUser
// );

router.get(
  "/kaotika",
  middleware.verifyIdToken,       
  userController.getKaotikaUser
);

router.get(
  "/mongo",
  middleware.verifyIdToken,       
  userController.getMongoUser
);

router.post(
  "/login",
  middleware.verifyIdToken,       
  userController.loginUser
);

module.exports = router;

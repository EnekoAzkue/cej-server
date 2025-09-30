const express = require("express");
const router = express.Router();

const middleware = require("../middlewares/verifyData");
const userController = require("../controllers/userController");



// TESTISNG
router.get(
  "/kaotika",
  middleware.verifyIdToken,       
  userController.getKaotikaUser
);

// TESTING
router.get(
  "/mongo",
  middleware.verifyIdToken,       
  userController.getMongoUser
);

router.post(
  "/log-in",
  middleware.verifyIdToken,       
  userController.loginUser
);

router.post(
  "/access-logged-in",
  middleware.verifyIdToken,
  userController.loggedUser
);

module.exports = router;

const express = require("express");
const router = express.Router();

const middleware = require("../middlewares/verifyData");
const userController = require("../controllers/userController");

router.post(
  "/log-in",
  middleware.verifyIdToken,
  userController.createOrUpdateUser
);
router.post(
  "/access-logged-in",
  middleware.verifyIdToken,
  userController.updateUser
);

module.exports = router;

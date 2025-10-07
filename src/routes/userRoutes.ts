import express, { Router } from "express";
const router = express.Router();

import middleware from "../middlewares/verifyData";
import userController from "../controllers/userController";

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

router.get(
  "/:userEmail",
  userController.getUser
);

router.patch(
  "/:userEmail",
  userController.updateUser
)

export default router;
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
  "/get/:userEmail",
  userController.getUser
);

router.patch(
  "/update/:userEmail",
  userController.updateUser
)

router.get(
  "/get-acolytes",
  userController.getAcolytes
)

export default router;
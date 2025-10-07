"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const verifyData_1 = __importDefault(require("../middlewares/verifyData"));
const userController_1 = __importDefault(require("../controllers/userController"));
// TESTISNG
router.get("/kaotika", verifyData_1.default.verifyIdToken, userController_1.default.getKaotikaUser);
// TESTING
router.get("/mongo", verifyData_1.default.verifyIdToken, userController_1.default.getMongoUser);
router.post("/log-in", verifyData_1.default.verifyIdToken, userController_1.default.loginUser);
router.post("/access-logged-in", verifyData_1.default.verifyIdToken, userController_1.default.loggedUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("firebase-admin/app");
require("dotenv/config");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
(0, app_1.initializeApp)({
    credential: (0, app_1.applicationDefault)(),
});
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, { /* options */});
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use("/user", userRoutes_1.default);
async function start() {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_ROUTE);
        httpServer.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}.`);
        });
        console.log("You are now connected to Mongo.");
    }
    catch (error) {
        console.log(`Error to connect to the database: ${error.message}`);
    }
}
start();
//# sourceMappingURL=index.js.map
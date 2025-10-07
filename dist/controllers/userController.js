"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
//TESTING
const getMongoUser = async (req, res) => {
    const userEmail = res.locals.userEmail;
    if (!userEmail) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "userEmail not available" },
        });
    }
    try {
        const user = await userService_1.default.getUser(userEmail);
        if (!user) {
            return res.status(403).send({
                status: "FAILED",
                data: { error: `Can't find user with the Email: ${userEmail}` },
            });
        }
        res.send({ user });
    }
    catch (error) {
        res.status(500).send({
            status: "FAILED",
            message: "Error fetching user from Mongo",
            data: { error: error?.message || error },
        });
    }
};
//TESTING
const getKaotikaUser = async (req, res) => {
    const userEmail = res.locals.userEmail;
    if (!userEmail) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "userEmail not available" },
        });
    }
    try {
        const user = await userService_1.default.getKaotikaUser(userEmail);
        if (!user) {
            return res.status(403).send({
                status: "FAILED",
                data: { error: `Can't find user in Kaotika with the Email: ${userEmail}` },
            });
        }
        res.send({ user });
    }
    catch (error) {
        res.status(500).send({
            status: "FAILED",
            message: "Error fetching user from Kaotika",
            data: { error: error?.message || error },
        });
    }
};
const loginUser = async (req, res) => {
    const userEmail = res.locals.userEmail;
    console.log(`Logging in with Email: ${userEmail}.`);
    if (!userEmail) {
        console.log(`Email not available: ${userEmail}.`);
        return res.status(400).send({
            status: "FAILED",
            data: { error: "userEmail not available" },
        });
    }
    try {
        const putOrPost = await userService_1.default.loginUser(userEmail);
        const user = putOrPost[1];
        if (putOrPost[0] === 0) {
            console.log("User created successfully.\n");
            return res.status(201).send({
                status: "OK",
                message: "User created successfully",
                user
            });
        }
        else {
            console.log("User updated successfully.\n");
            return res.status(200).send({
                status: "OK",
                message: "User updated successfully",
                user
            });
        }
    }
    catch (error) {
        console.log(`User not found in Kaotika with Email: ${userEmail}`);
        res.status(403).send({
            status: "FAILED",
            message: "User not found on kaotika"
        });
    }
};
const loggedUser = async (req, res) => {
    const userEmail = res.locals.userEmail;
    console.log(`User with email: ${userEmail} already logged in.`);
    if (!userEmail) {
        console.log(`Email not available: ${userEmail}.`);
        return res.status(400).send({
            status: "FAILED",
            data: { error: "userEmail not available" },
        });
    }
    try {
        const updatedUser = await userService_1.default.logedUser(userEmail);
        console.log("User updated successfully.\n");
        return res.status(200).send({
            status: "OK",
            message: "User updated successfully",
            user: updatedUser,
        });
    }
    catch (error) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "userEmail not available" },
        });
    }
};
const getUser = async (req, res) => {
    const { params: { userEmail } } = req;
    try {
        const user = await userService_1.default.getUser(userEmail);
        if (!user) {
            return res.status(403).send({
                status: "FAILED",
                data: { error: `Can't find user with the Email: ${userEmail}` },
            });
        }
        res.send({ user });
    }
    catch (error) {
        res.status(500).send({
            status: "FAILED",
            message: "Error fetching user from Mongo",
            data: { error: error?.message || error },
        });
    }
};
const updateUser = async (req, res) => {
    const { body, params: { userEmail }, } = req;
    if (!userEmail) {
        return res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':userEmail' can not be empty" },
        });
    }
    try {
        const updatedUser = await userService_1.default.updateUser(userEmail, body);
        if (!updateUser) {
            return res.status(403).send({
                status: "FAILED",
                data: { error: `Can't find user with the Email: ${userEmail}` }
            });
        }
        console.log("User updated successfully.");
        res.send(updatedUser);
    }
    catch (error) {
        res.status(500).send({
            status: "FAILED",
            message: "Error updating user",
            data: { error: error?.message || error },
        });
    }
};
const getAcolytes = async (req, res) => {
    try {
        const acolytes = await userService_1.default.getAcolytes();
        if (acolytes.length === 0) {
            return res.status(404).send({ message: "Acolytes not found" });
        }
        res.send(acolytes);
    }
    catch (error) {
        res.status(500).send({
            status: "FAILED",
            message: "Error fetching acolytes",
            data: { error: error?.message || error }
        });
    }
};
const userController = {
    getMongoUser,
    getKaotikaUser,
    loginUser,
    loggedUser,
    getUser,
    updateUser,
    getAcolytes,
};
exports.default = userController;
//# sourceMappingURL=userController.js.map
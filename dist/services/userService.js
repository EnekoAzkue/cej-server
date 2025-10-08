"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userDatabase_1 = __importDefault(require("../database/userDatabase"));
const roles_1 = __importDefault(require("../roles/roles"));
const emails_1 = __importDefault(require("../roles/emails"));
const getUser = async (userEmail) => {
    try {
        console.log("Fetching user from MongoDB...");
        const user = await userDatabase_1.default.getUser(userEmail);
        return user;
    }
    catch (error) {
        throw error;
    }
};
const getKaotikaUser = async (userEmail) => {
    try {
        console.log("Fetching user from Kaotika...");
        const response = await fetch(`https://kaotika-server.fly.dev/players/email/${userEmail}`);
        if (!response.ok) {
            throw new Error(`Kaotika API error: ${response.status}`);
        }
        const kaotikaUser = await response.json();
        const userData = kaotikaUser.data;
        return userData || null;
    }
    catch (error) {
        throw error;
    }
};
const createUser = async (newUser) => {
    try {
        console.log(`User not found in MondoDB.`);
        console.log("Creating user...");
        const createdUser = await userDatabase_1.default.createUser(newUser);
        return createdUser;
    }
    catch (error) {
        throw error;
    }
};
const updateUser = async (userEmail, changes) => {
    try {
        console.log("Updating user...");
        const updatedUser = await userDatabase_1.default.updateUser(userEmail, changes);
        return updatedUser;
    }
    catch (error) {
        throw error;
    }
};
const loginUser = async (userEmail) => {
    try {
        const kaotikaUser = await getKaotikaUser(userEmail);
        if (!kaotikaUser) {
            throw new Error(`User not found in Kaotika with email: ${userEmail}`);
        }
        const mongoUser = await getUser(userEmail);
        let putOrPost = [];
        if (!mongoUser) {
            const newUser = {
                active: false,
                rol: "",
                socketId: "",
                isInside: false,
                ...kaotikaUser,
            };
            if (newUser.email.includes(emails_1.default.ACOLYTE)) {
                newUser.rol = roles_1.default.ACOLYTE;
            }
            else if (newUser.email === emails_1.default.ISTVAN) {
                newUser.rol = roles_1.default.ISTVAN;
            }
            else if (newUser.email === emails_1.default.MORTIMER) {
                newUser.rol = roles_1.default.MORTIMER;
            }
            else if (newUser.email === emails_1.default.VILLAIN) {
                newUser.rol = roles_1.default.VILLAIN;
            }
            const createdUser = await createUser(newUser);
            putOrPost.push(0);
            putOrPost.push(createdUser);
            return putOrPost;
        }
        const updatedUser = await updateUser(userEmail, {
            active: true,
            ...kaotikaUser,
        });
        putOrPost.push(1);
        putOrPost.push(updatedUser);
        return putOrPost;
    }
    catch (error) {
        throw error;
    }
};
const logedUser = async (userEmail) => {
    try {
        const kaotikaUser = await getKaotikaUser(userEmail);
        if (!kaotikaUser) {
            throw new Error(`User not found in Kaotika with email: ${userEmail}`);
        }
        const updatedUser = await updateUser(userEmail, {
            active: true,
            ...kaotikaUser,
        });
        return updatedUser;
    }
    catch (error) {
        throw error;
    }
};
const getAcolytes = async () => {
    try {
        const acolytes = userDatabase_1.default.getAcolytes();
        return acolytes;
    }
    catch (error) {
        throw error;
    }
};
const userService = {
    getUser,
    createUser,
    updateUser,
    getKaotikaUser,
    loginUser,
    logedUser,
    getAcolytes,
};
exports.default = userService;
//# sourceMappingURL=userService.js.map
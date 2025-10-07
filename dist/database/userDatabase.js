"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
const getUser = async (userEmail) => {
    try {
        const user = await userModel_1.default.findOne({ email: userEmail });
        return user;
    }
    catch (error) {
        throw error;
    }
};
const createUser = async (newUser) => {
    try {
        const userToInsert = new userModel_1.default(newUser);
        const createdUser = await userToInsert.save();
        return createdUser;
    }
    catch (error) {
        throw error;
    }
};
const updateUser = async (userEmail, changes) => {
    try {
        const updatedUser = await userModel_1.default.findOneAndUpdate({ email: userEmail }, { $set: changes }, { new: true, upsert: true });
        return updatedUser;
    }
    catch (error) {
        throw error;
    }
};
const getAcolytes = async () => {
    try {
        const acolytes = userModel_1.default.find({ "rol": "acolyte" });
        return acolytes;
    }
    catch (error) {
        throw error;
    }
};
const userDatabase = {
    getUser,
    createUser,
    updateUser,
    getAcolytes,
};
exports.default = userDatabase;
//# sourceMappingURL=userDatabase.js.map
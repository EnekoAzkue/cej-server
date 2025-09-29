const userModel = require('../models/userModel');

const getUser = async (userEmail) => {
  try {
    const user = await userModel.findOne({ "data.email": userEmail });
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (newUser) => {
  try {
    const userToInsert = new userModel(newUser);
    const createdUser = await userToInsert.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userEmail, changes) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { "data.email": userEmail },{ $set: changes },{ new: true, upsert: true }         
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  createUser,
  updateUser
};

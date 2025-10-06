import userModel from "../models/userModel";

const getUser = async (userEmail: string) => {
  try {
    const user = await userModel.findOne({ email: userEmail });
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (newUser: any) => {
  try {
    const userToInsert = new userModel(newUser);
    const createdUser = await userToInsert.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userEmail: string, changes: any) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { email: userEmail },{ $set: changes },{ new: true, upsert: true }         
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const userDatabase = {
  getUser,
  createUser,
  updateUser,
};

export default userDatabase;
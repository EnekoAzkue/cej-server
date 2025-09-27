const userModel = require('.../models/userModel');

//UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
// const getUser = async (res.locals.userEmail) => {
const getUser = async (userEmail) => {
    try
    {
        //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
        // const users = await userModel.findByOne(res.locals.userEmail);
        const users = await userModel.findByOne(userEmail);
        return users;
    }
    catch (error)
    {
        throw error;
    }
};

const createUser = async (newUser) => {
    try
    {
        let userToInsert = new userModel(newUser);
        const createduser = await userToInsert.save( );
        return createduser;
    }
    catch (error)
    {
        throw error;
    }
};

    //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
    // const updateUser = async(res.locals.userEmail, changes) => {
    const updateUser = async(userEmail, changes) => {
    try
    {
        //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
        // let updatedUser = await userModel.findByOnedAndUpdate(res.locals.userEmail,
        let updatedUser = await userModel.findByOneAndUpdate(userEmail,
{ $set: changes }, { new: true });
        return updatedUser;
    }
    catch (error)
    {
        throw error;
    }
};

module.exports = {
    getUser,
    createUser,
    updateUser
}
const User = require('../database/userDatabase');

const getUser = async (userMail) => {
    try
    {
        const users = await User.getUser(userMail);
        return users;
    }
    catch (error)
    {
        throw error;
    }
};

const createNewUser = async (newUser) => {
    try
    {
        const createdUser =  User.createNewUser(newUser);
        return createdUser;
    }
    catch (error)
    {
        throw error;
    }
}



module.exports = { 
    getUser,
    createNewUser
}
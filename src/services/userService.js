const User = require('../database/userDatabase');

//UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
// const getUser = async (res.locals.userEmail) => {
const getUser = async (userEmail) => {
    try
    {
        //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
        // const users = await User.getUser(res.locals.userEmail);
        const users = await User.getUser(userEmail);
        return users;
    }
    catch (error)
    {
        throw error;
    }
};

//UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
// const getKaotikaUser = async (res.locals.userEmail) => {
const getKaotikaUser = async (userEmail) => {
    try {
        // const response = await fetch(`https://kaotika-server.fly.dev/players/email/${res.locals.userEmail}`);
        const response = await fetch(`https://kaotika-server.fly.dev/players/email/${userEmail}`);
        const kaotikaUser = await response.json();
        return kaotikaUser;
    } catch (error) {
        throw error;
    }
};

const createUser = async (newUser) => {
    try
    {
        const createdUser = await User.createUser(newUser);
        return createdUser;
    }
    catch (error)
    {
        throw error;
    }
}

    //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
    // const updateUser = async(res.locals.userEmail, changes) => {
    const updateUser = async(userEmail, changes) => {
    try
    {
        //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
        // const updatedUser = await User.updateUser(res.locals.userEmail, changes);
        const updatedUser = await User.updateUser(userEmail, changes);
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
    updateUser,
    getKaotikaUser
}
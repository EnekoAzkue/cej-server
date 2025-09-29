const User = require('../database/userDatabase');

const getUser = async (userEmail) => {
  try {
    const user = await User.getUser(userEmail);
    return user;
  } catch (error) {
    throw error;
  }
};

const getKaotikaUser = async (userEmail) => {
  try {
    const response = await fetch(`https://kaotika-server.fly.dev/players/email/${userEmail}`);
    if (!response.ok) {
      throw new Error(`Kaotika API error: ${response.status}`);
    }
    const kaotikaUser = await response.json();
    return kaotikaUser || null;
  } catch (error) {
    throw error;
  }
};

const createUser = async (newUser) => {
  try {
      
      const createdUser = await User.createUser(newUser);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userEmail, changes) => {
  try {
    const updatedUser = await User.updateUser(userEmail, changes);
    return updatedUser;
  } catch (error) {
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

    if (!mongoUser) {
      const newUser = {
        active: false,    
        ...kaotikaUser,   
      };
      return await createUser(newUser);
    }

    return await updateUser(userEmail, { active: true });

  } catch (error) {
    throw error;
  }
};

module.exports = { 
  getUser,
  createUser,
  updateUser,
  getKaotikaUser,
  loginUser
};

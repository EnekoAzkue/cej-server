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
    const userData = kaotikaUser.data
    return userData || null;
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

    let putOrPost = [];

    if (!mongoUser) {
      const newUser = {
        active: false,    
        ...kaotikaUser,   
      };

      const createdUser = await createUser(newUser)

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

  } catch (error) {
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

  } catch (error) {
    throw error;
  }
};

module.exports = { 
  getUser,
  createUser,
  updateUser,
  getKaotikaUser,
  loginUser,
  logedUser,
};

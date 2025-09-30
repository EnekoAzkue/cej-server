const userService = require("../services/userService");


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
    const user = await userService.getUser(userEmail);
    if (!user) {
      return res.status(403).send({
        status: "FAILED",
        data: { error: `Can't find user with the Email: ${userEmail}` },
      });
    }
    res.send({  user });
  } catch (error) {
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
    const user = await userService.getKaotikaUser(userEmail);
    if (!user) {
      return res.status(403).send({
        status: "FAILED",
        data: { error: `Can't find user in Kaotika with the Email: ${userEmail}` },
      });
    }
    res.send({ user });
  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      message: "Error fetching user from Kaotika",
      data: { error: error?.message || error },
    });
  }
};

const loginUser = async (req, res) => {
  const userEmail = res.locals.userEmail;

  if (!userEmail) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "userEmail not available" },
    });
  }

  try {
    const putOrPost = await userService.loginUser(userEmail);

    const user = putOrPost[1];

    if(putOrPost[0] === 0) {
      return res.status(201).send({
        status: "OK",
        message: "User created successfully",
        user
      });
    } else {
      return res.status(200).send({
        status: "OK",
        message: "User updated successfully",
        user
      });
    }
    
  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      message: "Error during login flow",
      data: { error: error?.message || error },
    });
  }
};

const loggedUser = async (req, res) => {
  const userEmail = res.locals.userEmail;

  if (!userEmail) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "userEmail not available" },
    });
  }

  try {
    const updatedUser = await userService.logedUser(userEmail);

    return res.status(200).send({
      status: "OK",
      message: "User updated successfully",
      updatedUser
    });

  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      message: "Error refreshing user from Kaotika",
      data: { error: error?.message || error },
    });
  }
};


module.exports = {
  getMongoUser,
  getKaotikaUser,
  loginUser,
  loggedUser,
};

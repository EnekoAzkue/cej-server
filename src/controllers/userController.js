const userService = require("../services/userService");

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
    res.send({ status: "OK", data: user });
  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      message: "Error fetching user from Mongo",
      data: { error: error?.message || error },
    });
  }
};

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
    const user = await userService.loginUser(userEmail);
    res.send({ user });
  } catch (error) {
    res.status(500).send({
      status: "FAILED",
      message: "Error during login flow",
      data: { error: error?.message || error },
    });
  }
};

module.exports = {
  getMongoUser,
  getKaotikaUser,
  loginUser,
};

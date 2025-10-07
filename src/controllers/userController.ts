import userService from "../services/userService";

//TESTING
const getMongoUser = async (req: any, res: any) => {
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
  } catch (error: any) {
    res.status(500).send({
      status: "FAILED",
      message: "Error fetching user from Mongo",
      data: { error: error?.message || error },
    });
  }
};

//TESTING
const getKaotikaUser = async (req: any, res: any) => {
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
  } catch (error: any) {
    res.status(500).send({
      status: "FAILED",
      message: "Error fetching user from Kaotika",
      data: { error: error?.message || error },
    });
  }
};

const loginUser = async (req: any, res: any) => {
  const userEmail = res.locals.userEmail;
  console.log(`Logging in with Email: ${userEmail}.`)
  if (!userEmail) {
    console.log(`Email not available: ${userEmail}.`)
    return res.status(400).send({
      status: "FAILED",
      data: { error: "userEmail not available" },
    });
  }

  try {
    const putOrPost = await userService.loginUser(userEmail);

    const user = putOrPost[1];

    if(putOrPost[0] === 0) {
      console.log("User created successfully.\n")
      return res.status(201).send({
        status: "OK",
        message: "User created successfully",
        user
      });
    } else {
      console.log("User updated successfully.\n")
      return res.status(200).send({
        status: "OK",
        message: "User updated successfully",
        user
      });
    }
    
  } catch (error) {
    console.log(`User not found in Kaotika with Email: ${userEmail}`)
    res.status(403).send({
      status: "FAILED",
      message: "User not found on kaotika"
    });
  }
};

const loggedUser = async (req: any, res: any) => {
  const userEmail = res.locals.userEmail;
  console.log(`User with Email: ${userEmail} already logged in.`)
  if (!userEmail) {
    console.log(`Email not available: ${userEmail}.`)
    return res.status(400).send({
      status: "FAILED",
      data: { error: "userEmail not available" },
    });
  }

  try {
    const updatedUser = await userService.logedUser(userEmail);
    console.log("User updated successfully.\n")
    return res.status(200).send({
      status: "OK",
      message: "User updated successfully",
      updatedUser
    });

  } catch (error) {
    return res.status(400).send({
      status: "FAILED",
      data: { error: "userEmail not available" },
    });
  }
};

const getUser = async (req: any, res: any ) => {
  const {params: {userEmail}} = req;

  try {
    const user = await userService.getUser(userEmail);
    if (!user) {
      return res.status(403).send({
        status: "FAILED",
        data: { error: `Can't find user with the Email: ${userEmail}` },
      });
    }
    res.send({  user });
  } catch (error: any) {
    res.status(500).send({
      status: "FAILED",
      message: "Error fetching user from Mongo",
      data: { error: error?.message || error },
    });
  }
};

const userController = {
  getMongoUser,
  getKaotikaUser,
  loginUser,
  loggedUser,
  getUser,
};

export default userController;

import User from "../database/userDatabase";
import USER_ROLES from "../roles/roles";
import EMAIL from "../roles/emails";

const getUser = async (userEmail: string) => {
  try {
    console.log("Fetching user from MongoDB...");

    const user = await User.getUserByField({ email: userEmail });
    return user;
  } catch (error) {
    throw error;
  }
};

const getKaotikaUser = async (userEmail: string) => {
  try {
    console.log("Fetching user from Kaotika...");

    const response = await fetch(
      `https://kaotika-server.fly.dev/players/email/${userEmail}`
    );

    if (!response.ok) {
      throw new Error(`Kaotika API error: ${response.status}`);
    }

    const kaotikaUser: any = await response.json();
    const userData = kaotikaUser.data;
    return userData || null;
  } catch (error) {
    throw error;
  }
};

const createUser = async (newUser: any) => {
  try {
    console.log("User not found in MongoDB.");
    console.log("Creating user...");

    const createdUser = await User.createUser(newUser);
    return createdUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userEmail: string, changes: any) => {
  try {
    console.log("Updating user...");

    const updatedUser = await User.updateUserByField(
      { email: userEmail },
      changes
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (userEmail: string) => {
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
        rol: "",
        socketId: "",
        isInside: false,
        ...kaotikaUser,
      };

      if (newUser.email.includes(EMAIL.ACOLYTE)) {
        newUser.rol = USER_ROLES.ACOLYTE;
      } else if (newUser.email === EMAIL.ISTVAN) {
        newUser.rol = USER_ROLES.ISTVAN;
      } else if (newUser.email === EMAIL.MORTIMER) {
        newUser.rol = USER_ROLES.MORTIMER;
      } else if (newUser.email === EMAIL.VILLAIN) {
        newUser.rol = USER_ROLES.VILLAIN;
      }

      const createdUser = await createUser(newUser);

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

const logedUser = async (userEmail: string) => {
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

const getAcolytes = async () => {
  try {
    const acolytes = User.getAcolytes();
    return acolytes;
  } catch (error: any) {
    throw error;
  }
};

const userService = {
  getUser,
  createUser,
  updateUser,
  getKaotikaUser,
  loginUser,
  logedUser,
  getAcolytes,
};

export default userService;

const userService = require(".../services/userService");

const getUser = async (req, res) => {
    //UNCOMMENT AND REPLACE WHEN MIDDLEWARE IS IMPLEMENTED
    // const {params: { res.locals.userEmail }} = req
    const {params: { userEmail }} = req
    
    //UNCOMMENT WHEN MIDDLEWARE IS IMPLEMENTED
    // if(!res.locals.userEmail) {
    if(!userEmail) {
        return res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter: 'userEmail' can not be empty"}
            })
    }

    try {

        //UNCOMMENT WHEN MIDDLEWARE IS IMPLEMENTED
        // const user = await userService.getUser(res.locals.userEmail);
        const user = await userService.getUser(userEmail);
        if(!user) {
            return res 
            .status(403)
            .send({ status: "FAILED",
                //UNCOMMENT WHEN MIDDLEWARE IS IMPLEMENTED
                // data: { error: `Can't find user with the Email: ${res.locals.userEmail}`} });
                data: { error: `Can't find user with the Email: ${userEmail}`} });
        }

        res.send({ status: "OK", data: user });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: { error: error?.message || error} });  
    }
};

const createNewUser = async (req, res) => {
    const { body } = req;
    if (
        !body.status ||
        !body.data
    ) {
      res
        .status(400)
        .send({
            status: "FAILED",
            data: {
                error: 
                 "One of the following keys is missing or is empty in request body: 'status','data'",
            },
        });
        return
    }

    const newUser = {
        status: body.status,
        data: body.data
    };

    try {
        const createdUser = await userService.createNewUser(newUser);
        res.status(201).send({ status: "OK", data: createdUser });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: { error: error?.message || error } });
    }
};



module.exports = { 
    getUser,
    createNewUser
}
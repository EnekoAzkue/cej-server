const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");

const mongodbRoute = "mongo string conection goes here";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/user", userRouter);

async function start() {
  try {
    await mongoose.connect(mongodbRoute);

    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}`);
    });

    console.log("you are now connected to Mongo");
  } catch (error) {
    console.log(`Error to connect to the database: ${error.message}`);
  }
}

start();

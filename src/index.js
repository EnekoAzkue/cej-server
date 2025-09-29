const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
const { initializeApp, applicationDefault } = require("firebase-admin/app");

initializeApp({
  credential: applicationDefault(),
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/user", userRouter);

async function start() {
  try {
    await mongoose.connect("mongodb+srv://enekoazkue:enekoazkuepasswd@cluster0.ylpw1pf.mongodb.net/TheOldSchool?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}.`);
    });

    console.log("You are now connected to Mongo.");
  } catch (error) {
    console.log(`Error to connect to the database: ${error.message}`);
  }
}

start();

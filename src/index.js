const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const serviceAccount = require("../er6-cej-firebase-adminsdk-fbsvc-8da2344087.json");
const { initializeApp } = require("firebase-admin/app");

const mongodbRoute =
  "mongodb+srv://enekoazkue:enekoazkuepasswd@cluster0.ylpw1pf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

initializeApp();

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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://er6-cej-default-rtdb.europe-west1.firebasedatabase.app",
});

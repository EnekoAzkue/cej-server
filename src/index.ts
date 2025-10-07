import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes";
import mongoose from "mongoose";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import 'dotenv/config';


initializeApp({
  credential: applicationDefault(),
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/user", userRouter);

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_ROUTE!);

    app.listen(PORT, () => {
      console.log(`API is listening on port ${PORT}.`);
    });

    console.log("You are now connected to Mongo.");
  } catch (error: any) {
    console.log(`Error to connect to the database: ${error.message}`);
  }
}

start();

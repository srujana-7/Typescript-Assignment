

import express from "express";
import db from "mongoose";

import userRoutes from "../routes/user";
import { json, urlencoded } from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

//mongoose.connect();
const connectDB = async () => {
  try {
      mongoose.connect("mongodb://localhost:27017/users")
  } catch (err) {
      console.log(err)
  }
}
connectDB()

app.listen(4000);
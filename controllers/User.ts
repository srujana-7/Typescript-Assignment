
import { RequestHandler } from "express";

import User, { UserModel } from "../models/user";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data: UserModel = req.body;
    console.log("Data", data);
    var user_1 = await User.create(data);
    return res
      .status(200)
      .json({ message: "User created successfully", data: user_1 });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const  id  = req.params.id;
    const user = await User.findById(id);
    return res.status(200).json({ message: "All!", data: user });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};



export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    var isDeleted = await User.findByIdAndDelete(id);
    if (!isDeleted) throw new Error("Failed to delete user");
    return res.status(200).json({ message: "user deleted successfully!" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
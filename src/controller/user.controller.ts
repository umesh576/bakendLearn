import { Request, Response } from "express";
import User from "../model/user.model";
import { Types } from "mongoose";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { Name, age, contact } = req.body;
    if (!Name || !age || !contact) {
      res.status(400).json({
        status: "failed",
        statusCode: 400,
        message: "Please provide crear details.",
      });
      throw Error("Provide required field");
    }

    const user = await User.create({ Name, age, contact });

    res.status(400).json({
      status: "success",
      statusCode: 200,
      message: "User created successfully.",
      data: user,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const allUser = await User.find();
    res.status(200).json({
      status: "success",
      statusCode: 200,
      message: "User created successfully.",
      data: allUser,
    });
  } catch (e) {
    console.log("Error: ", e);
  }
};

// export const getUserById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   console.log(id);
//   if (!id) {
//     throw error("Provide id");
//   }

//   const user = await User.findById(id);

//   res.status(200).json({
//     status: "success",
//     statusCode: 200,
//     message: "user fetched sucessfully",
//     data: user,
//   });
// };
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Optional: Validate MongoDB ID format
    if (!Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(id); // Fixed here

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      message: "User fetched successfully", // Fixed spelling
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

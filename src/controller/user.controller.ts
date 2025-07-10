import { Request, Response } from "express";
import User from "../model/user.model";

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

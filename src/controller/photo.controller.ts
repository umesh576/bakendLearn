import { error } from "console";
import { Request, Response } from "express";
import Photo from "../model/photo.model";

export const uploadPhoto = async (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  if (!body.image) {
    throw error("heyyyyyy");
  }
  //   const photoData = { image: req.image.path };
  const photo = Photo.create(body);
  res.status(200).json({
    status: "sucess",
    statusCode: 200,
    message: "photo upload sucessfully",
    data: photo,
  });
};

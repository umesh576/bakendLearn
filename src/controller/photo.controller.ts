import { Request, Response } from "express";
import Photo from "../model/photo.model";
import CustomError from "../middleware/customError.middleware";

export const uploadPhoto = async (req: Request, res: Response) => {
  try {
    // Files are in req.files, not req.body
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    if (!files?.image) {
      throw new CustomError("image required", 400);
    }

    // Assuming you want to save the path of the uploaded image
    const photoData = {
      image: files.image[0].path,
      // If you want to handle gallery images too:
      gallery: files.gallery?.map((file) => file.path) || [],
    };

    const photo = await Photo.create(photoData);

    res.status(200).json({
      status: "success",
      message: "Photo uploaded successfully",
      data: photo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

import { Router } from "express";
import { uploadPhoto } from "../controller/photo.controller";
import multer from "multer";

const server = Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
server.post(
  "/upload",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "gallery", maxCount: 8 },
  ]),
  uploadPhoto
);

export default server;

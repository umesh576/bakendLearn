import express from "express";
import "dotenv/config";
import postPhoto from "./routes/photo.routes";
import { connectDatabase } from "./config/databaseConnect.config";
import userSection from "./routes/user.routes";
import cors from "cors";
import multer from "multer";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI || "";

connectDatabase(DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/photo", postPhoto);
app.use("/api/user", userSection);
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
// for upload data in cludinary
// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req: Request, file, cb) {
    return cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post(
  "/upload",
  upload.single("profileImage"),
  (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.file);
    res.redirect("/");
  }
);

app.listen(PORT, () => {
  console.log("server started");
});

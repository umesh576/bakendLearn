import express from "express";
import "dotenv/config";
import postPhoto from "./routes/photo.routes";
import { connectDatabase } from "./config/databaseConnect.config";
import userSection from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI || "";

connectDatabase(DB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/photo", postPhoto);
app.use("/api/user", userSection);

app.listen(PORT, () => {
  console.log("server started");
});

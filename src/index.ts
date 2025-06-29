import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log("server started");
});

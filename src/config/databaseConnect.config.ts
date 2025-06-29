import mongoose from "mongoose";

export const connectDatabase = async (db_path: string) => {
  await mongoose
    .connect(db_path)
    .then(() => {
      console.log("Database can connected successfully.");
    })
    .catch((err: any) => {
      console.log(err);
    });
};

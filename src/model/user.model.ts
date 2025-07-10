import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      minLength: [2, "Name is more than 2 letter."],
      required: [true, "Name is required for login"],
    },
    age: {
      type: Number,
      required: [true, "age is required for login"],
    },
    contact: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;

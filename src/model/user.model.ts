import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: [String, "Name is must be string."],
    minLength: [2, "Name is more than 2 letter."],
    required: [true, "Name is required for login"],
  },
  age: {
    type: [Number, "age is must be string."],
    required: [true, "age is required for login"],
  },
  contact: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("user", userSchema);
export default User;

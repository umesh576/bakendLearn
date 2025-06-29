import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Photo = mongoose.model("photo", photoSchema);
export default Photo;

import mongoose from "mongoose";
const UserModel = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
    password: String
  },
  {
    collection: "account",
    timestamps: true
  }
);

export default mongoose.model("User", UserModel);

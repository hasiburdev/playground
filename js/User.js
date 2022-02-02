import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  money: Number,
  followerCount: Number,
});

export const User = mongoose.model("users", userSchema);

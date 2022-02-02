import express from "express";
import mongoose from "mongoose";
import { User } from "./User.js";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Mangoooooosh!!!",
  });
});

app.listen(8000, () => {
  console.log("listening!");
});

async function initDB() {
  try {
    await mongoose.connect("mongodb://localhost/test");
    console.log("db connected!");
  } catch (error) {
    console.log(error);
  }
}

// const userH = new User({
//   name: "Hasibur",
//   age: 70,
//   address: "Bidesh",
//   followerCount: 1,
//   money: 50,
// });

const addUser = async () => {
  try {
    const user = await User.create({
      name: "Justin Jolil",
      age: 18,
      address: "Kolikata Herbal",
      followerCount: 280,
      money: 10000,
      house: false,
    });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
// addUser();

// userH.save().then(() => console.log("saved"));
User.find({}, { _id: 0, __v: 0 }).then((data) => console.log(data));

initDB();

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import Workflow from "./model.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/api/workflow", async (req, res) => {
  const workflows = await Workflow.find().catch((e) =>
    res.status(500).send("Internal Server Error!")
  );
  res.status(200).json(workflows);
});

app.get("/api/workflow/:query", async (req, res) => {
  console.log(req.params);
  var re = new RegExp(req.params.query, "gi");
  const searchResult = await Workflow.find({
    name: re,
  }).exec();
  res.json(searchResult);
});

app.post("/api/workflow", async (req, res) => {
  console.log(req.body);
  const workflow = new Workflow(req.body);
  await workflow
    .save()
    .catch((e) => res.status(500).send("Internal Server Error!"));

  res.status(201).json({ message: "Workflow Created Successfully!" });
});

app.listen(4000, async () => {
  console.log(`listening on port 4000!`);
  await mongoose
    .connect(
      "mongodb+srv://hasibur:EvWR6E56dHrO7tZW@cluster0.voshd.mongodb.net/workflow?retryWrites=true&w=majority"
    )
    .catch((e) => console.log(e));
  console.log(`Database connected!`);
});

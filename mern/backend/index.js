import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const Todo = mongoose.model("todos", todoSchema);

app.get("/todo", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todo", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();

  res.status(201).json({
    message: "Success!",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.listen(4000, async () => {
  console.log(`Listening on port 4000!`);
  await mongoose
    .connect(
      `mongodb+srv://hasibur:EvWR6E56dHrO7tZW@cluster0.voshd.mongodb.net/todo?retryWrites=true&w=majority`
    )
    .catch((e) => console.log(e));
  console.log(`Database connected!`);
});

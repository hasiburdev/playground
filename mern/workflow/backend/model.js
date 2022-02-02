import mongoose from "mongoose";

const workflowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

export default mongoose.model("workflows", workflowSchema);

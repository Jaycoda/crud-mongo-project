import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// if model already exists then use that OR create a new model
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;

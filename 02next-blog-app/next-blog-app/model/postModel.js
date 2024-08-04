import {Schema, model,models } from "mongoose";
const postSchema = new Schema({
  title: String,
  description: String,
  image: String,
});

const postModel = models.Posts || model('Post',postSchema);

export default postModel;
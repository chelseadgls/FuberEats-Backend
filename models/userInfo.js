import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

let userInfo = new Schema({
  hash: { type: String }
});

export default mongoose.model("userInfo", userInfo);

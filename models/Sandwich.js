import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

let SandwichProduct = new Schema({
  id: { type: String },
  img: { type: String },
  name: { type: String },
  dsc: { type: String },
  price: { type: Number },
  rate: { type: Number },
  country: { type: String },
});

export default mongoose.model("sandwiches", SandwichProduct);
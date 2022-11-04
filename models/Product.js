import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

let Product = new Schema({
  id: { type: String },
  img: { type: String },
  name: { type: String },
  dsc: { type: String },
  price: { type: Number },
  rate: { type: Number },
  country: { type: String },
});

// let User = new Schema({

// });

export default mongoose.model("products", Product);

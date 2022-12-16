import mongoose, { mongo, Mongoose, Schema } from "mongoose";

const Schema = mongoose.Schema;

// TODO : MAKE SURE SCHEMA MATCHES allProductsCat in populate.js
let AllProducts = new Schema([
  {
    bbq: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
    burgers: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
    desserts: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
    drinks: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
    pizzas: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
    sandwiches: [
      {
        img: String,
        name: String,
        dsc: String,
        price: Number,
        rate: Number,
        country: String,
      },
    ],
  },
]);

// let AllProducts = new Schema({
//   bbq: [{ type: Schema.Types.ObjectId, ref: "bbq" }],
//   burger: [{ type: Schema.Types.ObjectId, ref: "burgers" }],
//   dessert: [{ type: Schema.Types.ObjectId, ref: "desserts" }],
//   drink: [{ type: Schema.Types.ObjectId, ref: "drinks" }],
//   pizza: [{ type: Schema.Types.ObjectId, ref: "pizzas" }],
//   product: [{ type: Schema.Types.ObjectId, ref: "products" }],
//   sandwich: [{ type: Schema.Types.ObjectId, ref: "sandwiches" }],
// });

export default mongoose.model("all_products", AllProducts);

import axios from "axios";
import fs from "fs";
import Product from "../models/Product.js";
import userInfo from "../models/userInfo.js";
import db from "../db/connection.js";
import userData from "./userData.json" assert { type: "json" }

// const PRODUCT_SEED_COUNT = 20;
let count = 0;
let allProducts = {};

const getProducts = async () => {
  count++;
  if (count > 1) return;
  let response = await axios(`https://ig-food-menus.herokuapp.com/our-foods`);
  let productData = response.data;
  let structuredProducts = productData.map(
    ({ img, name, dsc, price, rate, country }) => {
      return {
        img,
        name,
        dsc,
        price,
        rate,
        country,
      };
    }
  );
  allProducts = structuredProducts;
  writeProductData();
};

const writeProductData = async () => {
  try {
    await getProducts();
    await fs.writeFile(
      "./productData.json",
      JSON.stringify(allProducts),
      (err) => {
        if (err) throw err;
        console.log("Product Data has been written to file successfully.");
      }
    );
  } catch (error) {
    console.error(error);
  }
};


const insertData = async () => {
  try {
    await getProducts();
    await db.dropDatabase();
    await Product.create(allProducts);
    await userInfo.create(userData)
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
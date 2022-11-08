import axios from "axios";
import fs from "fs";
import Product from "../models/Product.js";
import userInfo from "../models/userInfo.js";
import BbqProduct from "../models/BbqProduct.js";
import DrinksProduct from "../models/DrinksProduct.js";
import db from "../db/connection.js";
import userData from "./userData.json" assert { type: "json" };

// ALL PRODUCTS -----------
let allProducts = {};

const getProducts = async () => {
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
    await fs.writeFile(
      "./productData.json",
      JSON.stringify(allProducts),
      (err) => {
        console.log(allProducts);
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
    // await userInfo.create(userData);
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

// BBQ PRODUCTS -----------

let bbq_products = {};

const getBbqProducts = async () => {
  // count++;
  // if (count > 1) return;
  let response = await axios(`https://ig-food-menus.herokuapp.com/bbqs`);
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
  bbq_products = structuredProducts;
  writeBbqData();
};

const writeBbqData = async () => {
  try {
    // await getProducts();
    await fs.writeFile(
      "./seed/bbqData.json",
      JSON.stringify(bbq_products),
      (err) => {
        if (err) throw err;
        console.log("bbq Data has been written to bbq file successfully.");
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertBbq = async () => {
  try {
    await getBbqProducts();
    await db.dropDatabase();
    await BbqProduct.create(bbq_products);
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

// DRINKS PRODUCTS -----------

let drinks_products = {};

const getDrinksProducts = async () => {
  // count++;
  // if (count > 1) return;
  let response = await axios(`https://ig-food-menus.herokuapp.com/drinks`);
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
  drinks_products = structuredProducts;
  writeDrinksData();
};

const writeDrinksData = async () => {
  try {
    // await getProducts();
    await fs.writeFile(
      "./seed/drinksData.json",
      JSON.stringify(drinks_products),
      (err) => {
        if (err) throw err;
        console.log(
          "drinks Data has been written to drinks file successfully."
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertDrinks = async () => {
  try {
    await getDrinksProducts();
    await db.dropDatabase();
    await DrinksProduct.create(drinks_products);
    await db.close();
  } catch (err) {
    console.log(err);
  }
};

insertData();
// insertBbq();
// insertDrinks();

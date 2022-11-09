import axios from "axios";
import fs from "fs";
import Product from "../models/Product.js";
import Drinks from "../models/Drinks.js";
import userInfo from "../models/userInfo.js";
import BbqProduct from "../models/BbqProduct.js";
import BurgerProduct from "../models/Burger.js";
import PizzasProduct from "../models/Pizza.js";
import DessertProduct from "../models/Pizza.js";
import SandwichProduct from "../models/Sandwich.js";

import db from "../db/connection.js";
import userData from "./userData.json" assert { type: "json" };

let allProducts = {};

const getProducts = async () => {
  let response = await axios("https://ig-food-menus.herokuapp.com/our-foods");
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
      "./seed/productData.json",
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
    await userInfo.create(userData);
  } catch (err) {
    console.log(err);
  }
};

// BBQ PRODUCTS -----------------

let bbq_products = {};

const getBbqProducts = async () => {
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
  } catch (err) {
    console.log(err);
  }
};

// DRINKS

let drinks_products = {};

const getDrinksProducts = async () => {
  let response = await axios(`https://ig-food-menus.herokuapp.com/drinks`);
  let drinksData = response.data;
  let structuredDrinks = drinksData.map(
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
  drinks_products = structuredDrinks;
  writeDrinksData();
};

const writeDrinksData = async () => {
  try {
    await fs.writeFile(
      "./seed/drinksData.json",
      JSON.stringify(drinks_products),
      (err) => {
        if (err) throw err;
        console.log("drinks Data has been written to drink file successfully.");
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
    await Drinks.create(drinks_products);
  } catch (err) {
    console.log(err);
  }
};

// BURGERS

let burgers_products = {};

const getBurgersProducts = async () => {
  let response = await axios(`https://ig-food-menus.herokuapp.com/burgers`);
  let burgersData = response.data;
  let structuredBurgers = burgersData.map(
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
  burgers_products = structuredBurgers;
  writeBurgersData();
};

const writeBurgersData = async () => {
  try {
    await fs.writeFile(
      "./seed/burgersData.json",
      JSON.stringify(burgers_products),
      (err) => {
        if (err) throw err;
        console.log(
          "burgers Data has been written to burger file successfully."
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertBurgers = async () => {
  try {
    await getBurgersProducts();
    await db.dropDatabase();
    await BurgerProduct.create(burgers_products);
  } catch (err) {
    console.log(err);
  }
};

// PIZZAS

let pizzas_products = {};

const getPizzasProducts = async () => {
  let response = await axios(`https://ig-food-menus.herokuapp.com/pizzas`);
  let pizzasData = response.data;
  let structuredPizzas = pizzasData.map(
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
  pizzas_products = structuredPizzas;
  writePizzasData();
};

const writePizzasData = async () => {
  try {
    await fs.writeFile(
      "./seed/pizzasData.json",
      JSON.stringify(pizzas_products),
      (err) => {
        if (err) throw err;
        console.log(
          "pizzas Data has been written to pizzas file successfully."
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertPizzas = async () => {
  try {
    await getPizzasProducts();
    await db.dropDatabase();
    await PizzasProduct.create(pizzas_products);
  } catch (err) {
    console.log(err);
  }
};

// DESSERTS

let desserts_products = {};

const getDessertsProducts = async () => {
  let response = await axios(`https://ig-food-menus.herokuapp.com/desserts`);
  let dessertsData = response.data;
  let structuredDesserts = dessertsData.map(
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
  desserts_products = structuredDesserts;
  writeDessertsData();
};

const writeDessertsData = async () => {
  try {
    await fs.writeFile(
      "./seed/dessertsData.json",
      JSON.stringify(desserts_products),
      (err) => {
        if (err) throw err;
        console.log(
          "desserts Data has been written to desserts file successfully."
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertDesserts = async () => {
  try {
    await getDessertsProducts();
    await db.dropDatabase();
    await DessertProduct.create(desserts_products);
  } catch (err) {
    console.log(err);
  }
};

// SANDWICHES

let sandwiches_products = {};

const getSandwichesProducts = async () => {
  let response = await axios(`https://ig-food-menus.herokuapp.com/sandwiches`);
  let sandwichesData = response.data;
  let structuredSandwiches = sandwichesData.map(
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
  sandwiches_products = structuredSandwiches;
  writeSandwichesData();
};

const writeSandwichesData = async () => {
  try {
    await fs.writeFile(
      "./seed/sandwichesData.json",
      JSON.stringify(sandwiches_products),
      (err) => {
        if (err) throw err;
        console.log(
          "sandwiches Data has been written to sandwiches file successfully."
        );
      }
    );
  } catch (error) {
    console.error(error);
  }
};

const insertSandwiches = async () => {
  try {
    await getSandwichesProducts();
    await db.dropDatabase();
    await SandwichProduct.create(sandwiches_products);
  } catch (err) {
    console.log(err);
  }
};

// main function
const insertSeedData = async () => {
  await insertBbq();
  await insertData();
  await insertDrinks();
  await insertBurgers();
  await insertPizzas();
  await insertDesserts();
  await insertSandwiches();
  await db.close();
};

insertSeedData();

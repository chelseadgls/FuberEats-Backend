import BbqProducts from "../models/BbqProduct.js";
import burgerProducts from "../models/Burger.js";
import dessertsProducts from "../models/Dessert.js";
import drinksProducts from "../models/Drinks.js";
import pizzasProducts from "../models/Pizza.js";
import sandwichesProducts from "../models/Sandwich.js";

export const getAllProducts = async (req, res) => {
  try {
    const bbqs = await BbqProducts.find();
    const burgers = await burgerProducts.find();
    const desserts = await dessertsProducts.find();
    const drinks = await drinksProducts.find();
    const pizzas = await pizzasProducts.find();
    const sandwiches = await sandwichesProducts.find();

    let allProducts = [
      { bbq: [...bbqs] },
      { burgers: [...burgers] },
      { desserts: [...desserts] },
      { drinks: [...drinks] },
      { pizzas: [...pizzas] },
      { sandwiches: [...sandwiches] },
    ];
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

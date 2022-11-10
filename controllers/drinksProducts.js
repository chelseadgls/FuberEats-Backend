import DrinksProduct from "../models/Drinks.js";

export const getDrinksProducts = async (req, res) => {
  try {
    const drinks_products = await DrinksProduct.find();
    res.json(drinks_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

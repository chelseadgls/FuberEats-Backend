import PizzasProduct from "../models/Pizza.js";

export const getPizzasProducts = async (req, res) => {
  try {
    const pizzas_products = await PizzasProduct.find();
    res.json(pizzas_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

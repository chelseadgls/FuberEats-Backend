import SandwichProduct from "../models/Sandwich.js";

export const getSandwichesProducts = async (req, res) => {
  try {
    const sandwiches_products = await SandwichProduct.find();
    res.json(sandwiches_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

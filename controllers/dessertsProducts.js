import DessertProduct from "../models/Dessert.js";

export const getDessertsProducts = async (req, res) => {
  try {
    const desserts_products = await DessertProduct.find();
    res.json(desserts_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

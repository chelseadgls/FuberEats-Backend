import BbqProduct from "../models/BbqProduct.js";

export const getBbqProducts = async (req, res) => {
  try {
    const bbq_products = await BbqProduct.find();
    res.json(bbq_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

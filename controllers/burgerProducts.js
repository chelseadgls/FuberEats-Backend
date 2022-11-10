import BurgerProduct from "../models/BbqProduct.js";

export const getBurgersProducts = async (req, res) => {
  try {
    const burgers_products = await BurgerProduct.find();
    res.json(burgers_products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

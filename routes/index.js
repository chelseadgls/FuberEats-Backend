import { Router } from "express";
import productRoutes from "./products.js";
import userRoutes from "./userInfo.js";
import bbqRoutes from "./bbq.js";
import drinksRoutes from "./drinks.js";
import burgersRoutes from "./burgers.js";
import pizzasRoutes from "./pizzas.js";
import dessertsRoutes from "./desserts.js";
import sandwichesRoutes from "./sandwiches.js";
import allProductsRoutes from "./allProducts.js";

const router = Router();

router.get("/", (req, res) => res.send("Welcome to fubar eats API!"));

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/bbq", bbqRoutes);
router.use("/drinks", drinksRoutes);
router.use("/burgers", burgersRoutes);
router.use("/pizzas", pizzasRoutes);
router.use("/desserts", dessertsRoutes);
router.use("/sandwiches", sandwichesRoutes);
router.use("/allProducts", allProductsRoutes);

export default router;

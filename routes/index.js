import { Router } from "express";
import productRoutes from "./products.js";
import userRoutes from "./userInfo.js";
import bbqRoutes from "./bbq.js";
import drinksRoutes from "./drinks.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/bbq", bbqRoutes);
router.use("/drinks", drinksRoutes);

export default router;

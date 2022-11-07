import { Router } from "express";
import productRoutes from "./products.js";
import bbqRoutes from "./bbq.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/products", productRoutes);
router.use("/bbq", bbqRoutes);

export default router;

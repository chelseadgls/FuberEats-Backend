import { Router } from "express";
import productRoutes from "./products.js";
import userRoutes from "./userInfo.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/products", productRoutes);


export default router;

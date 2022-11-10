import { Router } from "express";
import * as allProductsControllers from "../controllers/allProducts.js";
const router = Router();

router.get("/", allProductsControllers.getAllProducts);

export default router;

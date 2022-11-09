import { Router } from "express";
import * as controllers from "../controllers/products.js";
const router = Router();

router.get("/", controllers.getProducts);
router.post("/", controllers.createProduct);
router.get("/:id", controllers.getSingleProduct);
router.put("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);
router.get("/name/:name", controllers.getProductByName);
router.get("/limit/:num", controllers.getProductsLimit);

export default router;

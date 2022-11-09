import { Router } from "express";
import * as drinksControllers from "../controllers/drinksProducts.js";
const router = Router();

router.get("/", drinksControllers.getDrinksProducts);

export default router;

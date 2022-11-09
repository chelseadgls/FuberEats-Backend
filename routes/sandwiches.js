import { Router } from "express";
import * as sandwichesControllers from "../controllers/sandwichesProducts.js";
const router = Router();

router.get("/", sandwichesControllers.getSandwichesProducts);

export default router;

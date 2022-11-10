import { Router } from "express";
import * as pizzasControllers from "../controllers/pizzasProducts.js";
const router = Router();

router.get("/", pizzasControllers.getPizzasProducts);

export default router;

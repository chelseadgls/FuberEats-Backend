import { Router } from "express";
import * as dessertsControllers from "../controllers/dessertsProducts.js";
const router = Router();

router.get("/", dessertsControllers.getDessertsProducts);

export default router;

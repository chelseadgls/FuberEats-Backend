import { Router } from "express";
import * as burgersControllers from "../controllers/burgerProducts.js";
const router = Router();

router.get("/", burgersControllers.getBurgersProducts);

export default router;

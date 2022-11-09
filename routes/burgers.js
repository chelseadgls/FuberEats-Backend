import { Router } from "express";
import * as burgersControllers from "../controllers/burgersProducts.js";
const router = Router();

router.get("/", burgersControllers.getBurgersProducts);

export default router;

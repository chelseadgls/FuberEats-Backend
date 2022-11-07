import { Router } from "express";
import * as bbqControllers from "../controllers/bbqProducts.js";
const router = Router();

router.get("/", bbqControllers.getBbqProducts);

export default router;

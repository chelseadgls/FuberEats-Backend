import { Router } from "express";
import * as controllers from "../controllers/userInfo.js"
const router = Router();

router.get("/", controllers.getUsers);

router.post("/", controllers.createUser);

router.get("/:id", controllers.getUsersbyId);

router.put("/:id", controllers.updateUser);

router.delete("/:id", controllers.deleteUser);


export default router;

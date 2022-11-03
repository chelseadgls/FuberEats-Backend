import { Router } from "express"
import storeRoutes from "./storeRoutes.js"

const router = Router()

router.get("/", (request, response) => {
  response.json({
  })
})

router.use("/storeData", storeRoutes)

export default router

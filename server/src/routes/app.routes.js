import express from "express"
import listRouter from "./list.routes.js"

const router = express.Router()

router.get("/", (req, res) => console.log("app work"))
router.use("/list", listRouter)

export default router

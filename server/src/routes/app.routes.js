import express from "express"
import listRouter from "./list.routes.js"
import userRouter from "./user.routes.js"

const router = express.Router()

router.get("/", (req, res) => console.log("app work"))
router.use("/list", listRouter)
router.use("/user", userRouter)

export default router

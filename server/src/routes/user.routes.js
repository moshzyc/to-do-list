import express from "express"
import userCtrl from "../controller/userController.js"
import { auth } from "../middlewares/auth.js"

const router = express.Router()

router.get("/", (req, res) => {
  console.log("user work")
})
router.post("/signup", userCtrl.singup)
router.post("/login", userCtrl.login)
router.get("/info", auth, userCtrl.getInfo)
router.get("/logout", userCtrl.logout)

export default router

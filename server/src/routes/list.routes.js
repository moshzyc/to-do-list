import express from "express"
import listCtrl from "../controller/listController.js"

const router = express.Router()

router.get("/", (req, res) => console.log("list work"))
router.post("/add", listCtrl.addTask)
router.get("/:username", listCtrl.getTasks)
router.delete("/:id", listCtrl.deleteTask)
router.put("/:id", listCtrl.updateTask)
export default router

import { get } from "mongoose"
import { ToDo } from "../models/toDO.model.js"

const ctrlList = {
  async addTask(req, res) {
    try {
      const newTask = await ToDo.create(req.body)

      res.status(201).json({ message: "task add successfully", task: newTask })
    } catch (err) {
      console.error("Error saving Task:", err)
    }
  },
  async deleteTask(req, res) {
    const id = req.params.id
    try {
      const deletedTask = await ToDo.findByIdAndDelete(id)
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" })
      }
      return res.status(200).json({ message: "Task deleted successfully" })
    } catch (err) {
      console.error("Error delete Task:", err)
      return res.status(500).json({ message: "Failed to delete task" })
    }
  },
  async updateTask(req, res) {
    const id = req.params.id
    try {
      const updatedTask = await ToDo.findByIdAndUpdate(id, req.body, {
        new: true,
      })

      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" })
      }

      return res
        .status(200)
        .json({ message: "Task updated successfully", task: updatedTask })
    } catch (err) {
      console.error("Error updating task:", err)
      return res.status(500).json({ message: "Failed to update task" })
    }
  },
  async getTasks(req, res) {
    const username = req.params.username
    try {
        const tasks = await ToDo.find({username})

         res.status(200).json(tasks)
    } catch (err) {
      console.error("Error geting tasks:", err)
      return res.status(500).json({ message: "Failed to get tasks" })
    }
  },
}

export default ctrlList

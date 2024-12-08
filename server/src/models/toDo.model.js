import mongoose from "mongoose"

const toDoSchema = new mongoose.Schema({
  title: String,
  task: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
export const ToDo = mongoose.model("tasks", toDoSchema)

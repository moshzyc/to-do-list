import mongoose from "mongoose"

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/toDoList")
    console.log("db is connected")
  } catch (error) {
    console.log(error)
  }
}
connectToDb()

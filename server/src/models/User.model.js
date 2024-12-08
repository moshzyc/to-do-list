import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    otp: String,
  },
  { timestamps: true }
)
export const User = mongoose.model("users",UserSchema)
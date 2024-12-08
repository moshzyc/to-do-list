import { User } from "../models/User.model.js"
import { secretKey } from "../secrets/env.js"
import AppError from "../utils/appError.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { clearCookies } from "../utils/clearCookies.js"

const userCtrl = {
  async singup(req, res, next) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const user = await User.create({ ...req.body, password: hashedPassword })
      res.status(201).json({ ...user._doc, password: "*****" })
    } catch (err) {
      next(new AppError("user alrady exists", 400, error))
    }
  },
  async login(req, res, next) {
    const { username, password } = req.body
    try {
      const user = await User.findOne({ username })
      if (!user) {
        return next(new AppError("user or password worng", 401))
      }
      if (!(await bcrypt.compare(password, user.password))) {
        return next(new AppError("user or password worng", 401))
      }

      const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "30d" })
      res.cookie("access_token", "Bearer " + token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      res.status(201).json({ ...user._doc, password: "*****" })
    } catch (err) {
      next(new AppError(null, 401, err))
    }
  },
  async getInfo(req, res, next) {
    try {
      console.log("hey1")

      const user = await User.findById(req._id)
      console.log("hey")

      console.log(user)

      res.status(200).json({ ...user._doc, password: "*****" })
    } catch (err) {
      next(new AppError(null, null, err))
    }
  },
  async logout(req, res) {
    clearCookies(res, "access_token")
    res.status(200).json({ message: "Cookies cleared succesfully!" })
  },
}
export default userCtrl

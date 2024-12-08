import jwt from "jsonwebtoken"
import AppError from "../utils/appError.js"
import { secretKey } from "../secrets/env.js"

const auth = async (req, res ,next)=>{
    try{
        const cookie = req.cookies.access_token || ""
        const token = cookie.split(" ")[1]
        if(!token) return next(new AppError("unauthorized", 401))
            const decodeToken = jwt.verify(token, secretKey)
        req._id = decodeToken._id
        next()
    } catch(err){
        return next(new AppError("unauthorized", 401, err))
    }
}


export {auth}
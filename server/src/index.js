import express from "express"
import { PORT } from "./secrets/env.js"
import "./db/mongoDB.js"
import appRouter from "./routes/app.routes.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use(appRouter)
app.listen(PORT, () => console.log(`listen to port ${PORT}`))

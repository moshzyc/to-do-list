import express from "express"
import { PORT } from "../secrets/env.js"
import "./db/mongoDB.js"
import appRouter from "./routes/app.routes.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())

app.use(appRouter)
app.listen(PORT, () => console.log(`listen to port ${PORT}`))

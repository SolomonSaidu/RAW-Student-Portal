import express from "express"
import type { Request, Response } from "express"
import studentRoute from "./routers/student.route"

const app = express()
app.use(express.json())

const version: string = "v1"

app.use(`/api/${version}`, studentRoute)

app.get(`/api/${version}/health`, (_req: Request, res: Response)=>{
    res.status(200).json({
        status:"Ok"
    })
})





export default app
import express from "express"
import validate from "../schemas/student.schema"
import type { Request, Response } from "express"
import {z} from "zod"

const routes = express.Router()
type CreateStudents = z.infer<typeof validate.validateStudent>


routes.post(`/student`, (req: Request<CreateStudents>, res: Response) => {
    const valid = validate.validateStudent.safeParse(req.body)
    if(!valid.success) return res.status(400).json({
        status:"failed",
        error:valid.error.issues.map(e=>{return e.message})
    })

    res.status(201).json({
        status:"success", 
        data:{
            name:valid.data.name,
            email:valid.data.email
        }
    })
})

export default routes
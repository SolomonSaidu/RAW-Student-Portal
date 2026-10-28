import type { Request, Response } from "express"
import {z} from "zod"
import validate from "../schemas/student.schema"


type CreateStudents = z.infer<typeof validate.validateStudent>


const getStudents = (req: Request<CreateStudents>, res: Response) => {
    const {name, email} = req.body

    res.status(201).json({
        status:"success", 
        data:{
            name,
            email
        }
    })
}

export default {getStudents}
import type { RequestHandler } from "express"
import validate from "../schemas/student.schema"



const validateStudent: RequestHandler = (req, res, next) =>{
    const valid = validate.validateStudent.safeParse(req.body)
    if(!valid.success) return res.status(400).json({
        status:"failed",
        error:valid.error.issues.map(e=>{return e.message})
    })

    req.body = valid.data
    next()
}

export default validateStudent
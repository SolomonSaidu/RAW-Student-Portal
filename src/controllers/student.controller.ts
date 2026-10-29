import type { Request, Response } from "express"
import {z} from "zod"
import validate from "../schemas/student.schema"
import prisma from "../lib/prisma"
import bcrypt from "bcryptjs"


type CreateStudents = z.infer<typeof validate.validateStudent>

const RegisterStudents = async (req:Request<CreateStudents>, res:Response ) =>{
    const {email, password} = req.body;

    const checkStudents = await prisma.student.findMany({
        where:{
            email
        }
    })

    if (checkStudents.length > 0) return res.status(409).json({status:"failed", msg:"User already exist."})

    const passwordHash = await bcrypt.hash(password, 10)
    
    const student = await prisma.student.create({
       data:{
        matricNumber:"CHM23",
        email:email,
        passwordHash
       },
    })

    res.status(201).json({
        status:"success",
        data: student
    })
}

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

export default {getStudents, RegisterStudents}
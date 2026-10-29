import {z} from "zod"

const validateStudent = z.object({
    matricNumber:z.string("Matric most be a string"),
    email:z.string("Eamil must be a string").email("Please provide a valid email address"),
    password:z.string("Password must be a string.").min(2).max(25)
})

export default {validateStudent}
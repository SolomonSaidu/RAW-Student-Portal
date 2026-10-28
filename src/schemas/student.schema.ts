import {z} from "zod"

const validateStudent = z.object({
    name: z.string("Name must be a string").min(2, "Name must contain at least 2 characters"),
    email:z.string("Eamil must be a string").email("Please provide a valid email address")
})

export default {validateStudent}
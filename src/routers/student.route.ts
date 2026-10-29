import express from "express"
import studentController from "../controllers/student.controller"
import validateStudent from "../middleware/validate.middleware"

const routes = express.Router()


routes.post(`/student/register`, studentController.RegisterStudents)
routes.post(`/student`, validateStudent, studentController.getStudents)

export default routes
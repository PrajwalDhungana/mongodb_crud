const { Router } = require("express")
const { getStudent, createStudent, updateStudent, deleteStudent } = require("../controllers/StudentController")

const router = Router()

router.get("/get", getStudent)
router.post("/create", createStudent)
router.put("/edit/:id", updateStudent)
router.delete("/delete/:id", deleteStudent)

module.exports = router
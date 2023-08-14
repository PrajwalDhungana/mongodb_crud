const StudentModel = require("../model/Student")

/**
 * Read Operation (Get Student)
 */
module.exports.getStudent = async (req, res) => {
    const students = await StudentModel.find()
    res.send({ students })
}

/**
 * Create Operaton (Create Student)
 */
module.exports.createStudent = async (req, res) => {
    const { name, age, email, phone, faculty } = req.body
    StudentModel.create({ name, age, email, phone, faculty })
        .then((data) => {
            console.log("Saved successfully!")
            res.status(201).send(data)
        }).catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

/**
 * Update Operation (Update Student)
 */
module.exports.updateStudent = async (req, res) => {
    const { id } = req.params
    const { name, age, email, phone, faculty } = req.body
    StudentModel.findByIdAndUpdate(id, { name, age, email, phone, faculty })
        .then(() => {
            console.log("Updated successfully!")
            res.send("Updated Successfully!")
        }).catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

/**
 * Delete Operation (Delete Student)
 */
module.exports.deleteStudent = async (req, res) => {
    const { id } = req.params
    StudentModel.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted successfully!")
            res.send("Deleted Successfully!")
        }).catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}
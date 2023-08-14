const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        requried: false,
    },
    phone: {
        type: String,
        required: false,
    },
    faculty: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Student", StudentSchema)
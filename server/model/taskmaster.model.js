const mongoose = require('mongoose');

const TaskMasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your full name"]
    },
    userId: {
        required: [true, "Please enter a valid user ID"]
    },
    email: {
        type: String,
        required: [true, "Please enter a valid user ID"]
    },
    password: {
        type: String,
        minlength: [8, "Password must be more 8 characters long"]
    },
    imageUrl: {
        type: String,
        required: [true, "Please enter a valid user ID"]
    }
})

const TaskMaster = mongoose.model('TaskMaster', TaskMasterSchema)

module.exports = TaskMaster;
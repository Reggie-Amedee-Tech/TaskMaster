const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String
    },
    taskDescription: {
        type: String
    },
    date: {
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema )
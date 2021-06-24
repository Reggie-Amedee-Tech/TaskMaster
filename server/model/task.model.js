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
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskMaster'
    }
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema )
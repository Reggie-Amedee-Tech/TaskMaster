const Task = require('../model/task.model');

module.exports.createTask = (request, response) => {
    const { taskName, taskDescription, date } = request.body;
    Task.create({
        taskName,
        taskDescription,
        date
    })
    .then(task=> response.json(task))
    .catch(err=> response.json(err))
}

module.exports.showAllTasks = (request, response) => {
    Task.find({})
    .then(res=> response.json(res))
    .catch(err=> response.json(err))
}

module.exports.taskDetail = (request, response) => {
    Task.findOne({_id: request.params.id})
    .then(task=> response.json(task))
    .catch(err=> response.json(err))
}

module.exports.taskUpdate = (request, response) => {
    Task.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(updateTask=> response.json(updateTask))
    .catch(err=> response.json(err))
}

module.exports.taskDelete = (request, response) => {
    Task.deleteOne({_id: request.params.id})
    .then(deleteConfirmation=> response.json(deleteConfirmation))
    .catch(err=> response.json(err))
}
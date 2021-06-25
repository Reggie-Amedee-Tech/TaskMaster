const Task = require('../model/task.model');
const jwt = require('jsonwebtoken');

module.exports.createTask = (request, response) => {
    const { taskName, taskDescription, date } = request.body;
    const decodedJwt = jwt.decode(request.cookies.tmtoken,{complete: true});
    const userId = decodedJwt.payload.userId
    Task.create({
        taskName,
        taskDescription,
        date,
        createdBy: userId
    })
    .then(task=> response.json(task))
    .catch(err=> response.json(err))
}

module.exports.showAllTasks = (request, response) => {
    const decodedJwt = jwt.decode(request.cookies.tmtoken,{complete: true});
    const userId = decodedJwt.payload.userId
    Task.find({createdBy: userId })
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
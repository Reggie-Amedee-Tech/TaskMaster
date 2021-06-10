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
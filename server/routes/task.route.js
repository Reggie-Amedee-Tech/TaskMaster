const TaskController = require('../controller/task.controller');

module.exports = function(app) {
    app.post('/api/task', TaskController.createTask);
    app.get('/api/task/all', TaskController.showAllTasks);
    app.get('/api/task/:id', TaskController.taskDetail);
    app.put('/api/task/:id', TaskController.taskUpdate)
}
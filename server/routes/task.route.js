const TaskController = require('../controller/task.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
    app.post('/api/task', authenticate, TaskController.createTask);
    app.get('/api/task/all', TaskController.showAllTasks);
    app.get('/api/task/:id',  TaskController.taskDetail);
    app.put('/api/task/:id',  TaskController.taskUpdate);
    app.delete('/api/task/:id',  TaskController.taskDelete);
}
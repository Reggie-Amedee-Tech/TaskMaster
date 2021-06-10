const TaskController = require('../controller/task.controller');

module.exports = function(app) {
    app.post('/api/task', TaskController.createTask);
}
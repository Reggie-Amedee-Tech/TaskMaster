const TaskMaster = require('../controller/taskmaster.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post('/api/taskmaster/register', TaskMaster.register);
    app.post('/api/taskmaster/login', TaskMaster.login);
    app.get('/api/welcome', authenticate, TaskMaster.getAll);
}
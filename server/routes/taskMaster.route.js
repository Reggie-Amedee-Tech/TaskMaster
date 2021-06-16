const TaskMaster = require('../controller/taskmaster.controller');


module.exports = (app) => {
    app.post('/api/taskmaster/register', TaskMaster.register)
}
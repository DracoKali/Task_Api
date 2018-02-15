
const Task = require('../controllers/tasks')


module.exports = function(app){
    app.get('/tasks', Task.index);
    app.get('/', (req, res) => { res.sed('hello world');
    });
}
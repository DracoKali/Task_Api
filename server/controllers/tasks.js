
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

class TasksController {
    index(req, res){
        Task.find({}, (err, tasks) => {
            if(err){
                return res.json(err);
                // return res.json({
                //     'errors': 'something went harribly wrong'
                // });
            }
            return res.json(tasks);
        });
    }

}
module.exports = new TasksController();
const Daily = require('../models/Daily-Task')

function newTask(req, res){
  res.render('tasks/new', {title: 'Enter a new Task'})
}


module.exports = {
  new: newTask,
  
}
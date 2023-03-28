const Task = require('../models/Daily-Task')

function newTask(req, res){
  res.render('tasks/new', {title: 'Enter a new Task'})
}

function index (req,res){
  res.render('index', {title: 'Welcome to TaskMastermind'})
}

module.exports = {
  new: newTask,
  index
}
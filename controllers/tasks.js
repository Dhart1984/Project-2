const Task = require('../models/Daily-Task')

function newTask(req, res){
  res.render('tasks/new', {title: 'Enter a new Task'})
}



module.exports = {
  new: newTask,
  create,
  index,
  show,
}


function newTask(req, res){
  console.log('this is now working')
  res.render('tasks/new', {title: 'Enter a new Task'})
}

function create(req, res) {
  Task.create(req.body).then(function (newTask) {
      console.log(newTasks)
      res.redirect('/tasks')
  })
  console.log(req.body)
}

function index(req, res) {
  Task.find({})
      .then(function (tasks) {
          res.render('index', { tasks, title: 'All Tasks' })
      })
      .catch(function (err) {
          console.log(err) // log the error for debugging or redirect to error page 
          res.redirect('/')
      })
}

function show(req, res) {
  Task.findById(req.params.id).then(
      function (task) {
          res.render('tasks/show', { task, title: 'Task Details' })
      })
      .catch(function (err) {
          console.log(err)
          res.redirect('/')
      })
  console.log("this function is doing something ")
}





const Task = require('../models/Daily-Task')



module.exports = {
  new: newTask,
  create,
  index,
  show,
  delete: deleteTask
}


function newTask(req, res){
  Task.find({}).then(function(tasks){
    res.render('tasks/new', {title: 'Enter a new Task', tasks})


  }) .catch(function (err) {
    console.log(err) // log the error for debugging or redirect to error page 
    res.redirect('/')
})}

function create(req, res) {
  Task.create(req.body).then(function (newTask) {
      // console.log(newTasks)
      res.redirect('/tasks/new')
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

function deleteTask(req, res){
  Task.find({})
  .then(function(tasks){
    tasks.splice(req.params.id, 1)
    res.render('tasks/new', { title: 'Delete task', tasks})
  })  
}

function deleteTask(req, res){
  Task.find({})
  .then(function(tasks){
    tasks.splice(req.params.id, 1)
    res.render('tasks/new', { title: 'Delete task', tasks})
  })  
}



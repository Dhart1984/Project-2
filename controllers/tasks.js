const Task = require('../models/Daily-Task')



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
      console.log(newTask)
      res.redirect(`/tasks/${newTask._id}`)
  }).catch(function(err){
    console.log(err)
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

function addTask (){
  const taskId = req.body.cast
  const addId = req.params.id
  Task.findById(addId)
  .then(function(task){
    task.cast.push(taskId)
    return task.save()
  })
}
const Task = require('../models/Daily-Task')




module.exports = {
  new: newTask,
  create,
  index,
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

function deleteTask(req, res){
  Task.findByIdAndDelete(req.params.id)
  .then(function(){
    res.redirect('/tasks')
  })
  .catch(function(err){
    res.redirect('/')
  })
}




const Task = require('../models/Daily-Task')

function newTask(req, res){
  res.render('tasks/new', {title: 'Enter a new Task'})
}

<<<<<<< HEAD

=======
function index (req,res){
  res.render('index', {title: 'Welcome to TaskMastermind'})
}
>>>>>>> e8ef7d24f83a140dc14a071dbe94b393e02e197f

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
  Daily-Task.create(req.body).then(function (newTask) {
      console.log(newTasks)
      res.redirect('/tasks')
  })
  console.log(req.body)
}

function index(req, res) {
  Daily-Task.find({})
      .then(function (tasks) {
          res.render('tasks/index', { tasks, title: 'All Tasks' })
      })
      .catch(function (err) {
          console.log(err) // log the error for debugging or redirect to error page 
          res.redirect('/')
      })
}

function show(req, res) {
  Daily-Task.findById(req.params.id).then(
      function (task) {
          res.render('tasks/show', { task, title: 'Task Details' })
      })
      .catch(function (err) {
          console.log(err)
          res.redirect('/')
      })
  console.log("this function is doing something ")
}





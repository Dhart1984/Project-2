const Task = require('../models/Daily-Task')

module.exports = {
  new: newTask,
  create,
  index,
  delete: deleteTask,
  update
}

function newTask(req, res){
  Task.find({}).then(function(tasks){
    res.render('tasks/new', {title: 'Enter a new Task', tasks})
  }) .catch(function (err) {
    console.log(err) // log the error for debugging or redirect to error page 
    res.redirect('/')
})}

function create(req, res) {
  req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

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

function update (req, res){
  const filter = {_id: `${req.params.id}`}
  const taskUpdate = req.body
  Task.findOneAndUpdate(filter, taskUpdate)
  .then(function(task){
    console.log(err)
    res.redirect(`/bullets/${task._id}`)
  })
}


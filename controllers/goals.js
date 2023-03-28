const Goal = require('../models/Goal');


module.exports = {
  new: newGoal,
  create,
  index,
  show,
}

function newGoal(req, res){
  console.log("check to see if working")
  res.render('goals/new', {title: 'Enter a new Goal'})
}

function create(req, res) {
  Goal.create(req.body).then(function (newGoal) {
      console.log(newGoal)
      res.redirect('/goals')
  })
  console.log(req.body)
}


function index(req, res) {
  Goal.find({})
      .then(function (goals) {
          res.render('goals/index', { goals, title: 'All Goals' })
      })
      .catch(function (err) {
          console.log(err) // log the error for debugging or redirect to error page 
          res.redirect('/')
      })
}

function show(req, res) {
  Goal.findById(req.params.id).then(
      function (goal) {
          res.render('goals/show', { goal, title: 'State Details' })
      })
      .catch(function (err) {
          console.log(err)
          res.redirect('/')
      })
  console.log("this function is doing something ")
}


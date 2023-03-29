const Goal = require('../models/Goal');
const Bullet = require('../models/Bullet')

module.exports = {
  new: newGoal,
  create,
  index,
  delete: deleteGoal,
  show,
  newNote
}

function newGoal(req, res){
  Goal.find({})
  .then(function(goals){
    res.render('goals/new', {title: 'Enter a new Goal', goals})
  })
  console.log("check to see if working")
}

function create(req, res) {
  Goal.create(req.body)
   .then(function(){
      res.redirect('/goals/show')
     })
     .catch(function (err) {
      console.log(err) 
      res.redirect('/')
  }) 
  
}


function index(req, res) {
  Goal.find({})
      .then(function (goals) {
          res.render('goals/new', { goals, title: 'All Goals' })
      })
      .catch(function (err) {
          console.log(err) // log the error for debugging or redirect to error page 
          res.redirect('/')
      })
}

function deleteGoal(req, res){
  Goal.findByIdAndDelete(req.params.id)
  .then(function(){
    res.redirect('/goals')
  })
  .catch(function(err){
    res.redirect('/')
  })
}
function show(req, res){
  Goal.findById(req.params.id)
  .then(function(goal){
    res.render('goals/show', {title: "Goal details", goal})
  })
  .catch(function(err){
    res.redirect('/')
  })
}

function newNote(req, res) {
  const newId = req.params.id
  
  Goal.findById(newId)
  .then(function(goal){
    let bullet = Bullet.create(req.body)
    goal.notes.push(bullet._id)
    return goal.save()
  })
  .then(function(){
    res.redirect(`/goals/${req.params.id}/show`)
  }).catch(function(err){
    console.log(err)
    res.redirect('/')
  })
}
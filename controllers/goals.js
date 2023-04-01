const Goal = require('../models/Goal');
const Bullet = require('../models/Bullet')

module.exports = {
  new: newGoal,
  create,
  index,
  delete: deleteGoal,
  show,
  edit,
  newNote,
  editButton
}

function newGoal(req, res){
  Goal.find({})
  .then(function(goals){
    res.render('goals/new', {title: 'Enter a new Goal', goals})
  })
  console.log("check to see if working")
}

function create(req, res) {
  req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

  Goal.create(req.body)
  .then(function(){
      res.redirect('/goals')
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
  .populate('notes')
  .then(function(goal){
    res.render('goals/show', {title: "Goal details", goal})
  })
  .catch(function(err){
    res.redirect('/')
  })
}

function newNote(req, res) {
  const newId = req.params.id
   let currentGoal
  Goal.findById(newId)
  .then(function(goal){
    req.body.user = req.user._id
    currentGoal = goal
    return Bullet.create(req.body)
  })  
  .then(function(bullet){
    currentGoal.notes.push(bullet)
    return currentGoal.save()
  })
  .then(function(){
    res.redirect(`/goals/${req.params.id}/show`)
  }).catch(function(err){
    console.log(err)
    res.redirect(`/goals`)
  })
}


function edit(req, res, next) {
  let update = {
    goalName: req.body.goalName,
    dueDate: req.body.dueDate,
    goalType: req.body.goalType
  }
  
  Goal.findOneAndUpdate({_id: req.params.id}, update)
    .then(function(goal) {
      console.log(goal)
      res.redirect(`/goals/${goal._id}/show`)
    })
    .catch(function(err){
      next(err)
    })
}

function editButton(req, res){
  Goal.findById(req.params.id)
  .then(function(goal){
    res.render('goals/edit', {title: 'Edit Goal', goal})
  })
}


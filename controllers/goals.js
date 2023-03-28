const Goal = require('../models/Goal')

function newGoal(req, res){
  res.render('goals/new', {title: 'Enter a new Goal'})
}

function index (req,res){
  res.render('goals/index', {title: 'All Goals'})
}

module.exports = {
  new: newGoal,
  index
}
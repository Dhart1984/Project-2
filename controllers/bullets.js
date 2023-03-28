const Bullet = require('../models/Bullet')

function newBullet(req, res){
  res.render('bullets/new', {title: 'Enter a new Bullet'})
}

function index (req,res){
  res.render('bullets/index', {title: 'All Bullets'})
}

module.exports = {
  new: newBullet,
  index
}
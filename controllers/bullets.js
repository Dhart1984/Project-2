const Bullet = require('../models/Bullet');


function newBullet(req, res){
  Bullet.find({}).then(function(bullets){
    res.render('tasks/bullets', {title: 'Enter a new Bullet', bullets})


  }) .catch(function (err) {
    console.log(err) // log the error for debugging or redirect to error page 
    res.redirect('/')
})}

module.exports = {
  new: newBullet,
  create,
  index,
  delete: deleteBullet
}


function create(req, res) {
  Bullet.create(req.body).then(function (newBullet) {
      console.log(newBullet)
      res.redirect('/bullets')
  })
  console.log(req.body)
}

function index(req, res) {
  Bullet.find({})
      .then(function (bullets) {
          res.render('tasks/bullets', { bullets, title: 'All Bullets' })
      })
      .catch(function (err) {
          console.log(err) // log the error for debugging or redirect to error page 
          res.redirect('/')
      })
}

function deleteBullet(req, res){
  Bullet.findByIdAndDelete(req.params.id)
  .then(function(){
    res.redirect('/bullets')
  })
  .catch(function(err){
    res.redirect('/')
  })
}



















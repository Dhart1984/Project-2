const Bullet = require('../models/Bullet');

function newBullet(req, res){
  res.render('bullets/new', {title: 'Enter a new Bullet'})
};


module.exports = {
  new: newBullet,
  create,
  index,
  show,
}


function create(req, res) {
  Bullet.create(req.body).then(function (newBullet) {
      console.log(newState)
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




function show(req, res) {
  Bullet.findById(req.params.id).then(
      function (bullet) {
          res.render('bullets/show', { state, title: 'Bullet Details' })
      })
      .catch(function (err) {
          console.log(err)
          res.redirect('/')
      })
  console.log("this function is doing something ")
}




















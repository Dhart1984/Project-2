const Bullet = require('../models/Bullet')

module.exports = {
  new: newBullet,
  create,
  index,
  delete: deleteBullet,
  update
}

function newBullet(req, res){
  Bullet.find({}).then(function(bullets){
    res.render('tasks/bullets', {title: 'Enter a new Bullet', bullets})
  })
  .catch(function (err){
    console.log(err) // log the error for debugging or redirect to error page 
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  Bullet.create(req.body).then(function (newBullet) {
      console.log(newBullet)
      res.redirect('/bullets')
  })
  console.log(req.body)
}

function index(req, res) {
  Bullet.find({})
  .then(function (bullets) {
      let bullet = req.body
      res.render('tasks/bullets', { bullets, title: 'Journal' , bullet})
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

function update (req, res){
  const filter = {_id: `${req.params.id}`}
  const bulletUpdate = req.body

  Bullet.findOneAndUpdate(filter, bulletUpdate)
  .then(function(bullet){
    console.log(err)
    res.redirect(`/bullets/${bullet._id}`)
  })
}

















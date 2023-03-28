

function index (req,res){
  res.render('index', {title: 'Welcome to Task Mastermind'})
}

module.exports = {
  index
}
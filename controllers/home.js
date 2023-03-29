

function index (req,res){
  res.render('index', {title: 'TaskMastermind'})
}

module.exports = {
  index
}
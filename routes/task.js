var express = require('express');
var router = express.Router();
const dailyCtrl = require('../controllers/daily')

// index route
router.get('/', dailyCtrl.index)

router.get('/new', dailyCtrl.new)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
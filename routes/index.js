var express = require('express');
var router = express.Router();
const homeCtrl = require('../controllers/home')

/* GET users listing. */
router.get('/home', homeCtrl.index)

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const goalCtrl = require('../controllers/goals')

// index route
router.get('/', goalCtrl.index)

router.get('/new', goalCtrl.new)

module.exports = router;
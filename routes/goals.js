var express = require('express');
var router = express.Router();
const goalCtrl = require('../controllers/goals')

// index route
router.get('/', goalCtrl.index)

router.get('/', goalCtrl.new)

module.exports = router;
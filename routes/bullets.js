var express = require('express');
var router = express.Router();
const bulletCtrl = require('../controllers/bullets')

// index route
router.get('/', bulletCtrl.index)

router.get('/', bulletCtrl.new)

module.exports = router;
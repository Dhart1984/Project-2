var express = require('express');
var router = express.Router();
const goalCtrl = require('../controllers/goals')

// index route
router.get('/', goalCtrl.index)

router.get('/', goalCtrl.new)

router.get('/:id/show', goalCtrl.show)

router.post('/', goalCtrl.create)

router.delete('/:id', goalCtrl.delete)

module.exports = router;
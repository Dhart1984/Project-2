var express = require('express');
var router = express.Router();
const goalCtrl = require('../controllers/goals')
const ensureLoggedIn = require('../config/ensureLoggedIn');


// index route
router.get('/', goalCtrl.index)

router.get('/',ensureLoggedIn, goalCtrl.new)

router.get('/:id/show',ensureLoggedIn, goalCtrl.show)

router.post('/',ensureLoggedIn, goalCtrl.create)

router.delete('/:id',ensureLoggedIn, goalCtrl.delete)

router.post('/:id/show', goalCtrl.newNote)

router.put('/:id/edit', ensureLoggedIn, goalCtrl.update)

module.exports = router;
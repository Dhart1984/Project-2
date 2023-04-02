var express = require('express')
var router = express.Router()
const goalCtrl = require('../controllers/goals')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', goalCtrl.index)

router.get('/',ensureLoggedIn, goalCtrl.new)

router.get('/:id/show',ensureLoggedIn, goalCtrl.show)

router.post('/',ensureLoggedIn, goalCtrl.create)

router.delete('/:id',ensureLoggedIn, goalCtrl.delete)

router.post('/:id/show', ensureLoggedIn, goalCtrl.newNote)

router.get('/:id/edit', ensureLoggedIn, goalCtrl.editButton)

router.put('/:id/show', ensureLoggedIn, goalCtrl.edit)




module.exports = router;
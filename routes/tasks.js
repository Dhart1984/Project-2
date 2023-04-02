var express = require('express');
var router = express.Router();
const taskCtrl = require('../controllers/tasks')
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/',ensureLoggedIn, taskCtrl.new)

router.post('/',ensureLoggedIn, taskCtrl.create)

router.get('/', taskCtrl.index)

router.delete('/:id', ensureLoggedIn, taskCtrl.delete)

module.exports = router;








var express = require('express');
var router = express.Router();
const taskCtrl = require('../controllers/tasks')

// index route
router.get('/', taskCtrl.index)

router.get('/new', taskCtrl.new)

router.post('/tasks', taskCtrl.create)

module.exports = router;
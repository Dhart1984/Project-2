var express = require('express');
var router = express.Router();
const taskCtrl = require('../controllers/tasks')

// index route
router.get('/new', taskCtrl.new)

router.get('/', taskCtrl.index)

router.get('/:id', taskCtrl.show)

router.post('/tasks', taskCtrl.create)

router.post('/:id/tasks', taskCtrl.newTask)




module.exports = router;
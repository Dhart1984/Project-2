var express = require('express');
var router = express.Router();
const taskCtrl = require('../controllers/tasks')

// index route
router.get('/', taskCtrl.new)

router.post('/', taskCtrl.create)

router.get('/', taskCtrl.index)

router.get('/:id', taskCtrl.show)

router.get('/', function (req, res, next) {
    res.send()
})

module.exports = router;








var express = require('express');
var router = express.Router();
const taskCtrl = require('../controllers/tasks')

// index route
router.get('/', taskCtrl.new)

router.post('/', taskCtrl.create)

router.get('/', taskCtrl.index)



router.get('/', function (req, res, next) {
    res.send()
})


router.delete('/:id', taskCtrl.delete)


module.exports = router;








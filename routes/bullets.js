var express = require('express');
var router = express.Router();
const bulletCtrl = require('../controllers/bullets')

// index route


router.get('/new', bulletCtrl.new)

router.post('/', bulletCtrl.create)

router.get('/', bulletCtrl.index)

router.get('/:id', bulletCtrl.show)

router.get('/', function (req, res, next) {
    res.send()
})






module.exports = router;
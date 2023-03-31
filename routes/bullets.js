var express = require('express');
var router = express.Router();
const bulletCtrl = require('../controllers/bullets')
const ensureLoggedIn = require('../config/ensureLoggedIn');


// index route
router.get('/', bulletCtrl.index)

router.get('/', ensureLoggedIn, bulletCtrl.new)

router.post('/', ensureLoggedIn, bulletCtrl.create)

router.delete('/:id',ensureLoggedIn, bulletCtrl.delete)

router.put('/:id', ensureLoggedIn, bulletCtrl.update)





module.exports = router;
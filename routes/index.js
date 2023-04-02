
const router = require('express').Router();
const passport = require('passport');
const homeCtrl = require('../controllers/home')


router.get('/home', homeCtrl.index)

router.get('/', function(req, res, next) {
  res.redirect('/home');
})

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
))

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/home'
  }
))

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/home');
  })
})

module.exports = router;

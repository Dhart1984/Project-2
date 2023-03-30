
const router = require('express').Router();

const passport = require('passport');

const homeCtrl = require('../controllers/home')

/* GET users listing. */
router.get('/home', homeCtrl.index)

router.get('/', function(req, res, next) {
  res.redirect('/home');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/home'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/home');
  });
});
module.exports = router;

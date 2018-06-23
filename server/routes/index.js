var express = require('express');
var router = express.Router();
var auth = require('../auth');

/* GET home page. */

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   else { res.send('Not Authenticated!'); }
// }

router.get('/', (req, res) =>{
  res.render('index', { title: 'Express'});
  // console.log(req.user);
})

router.get('/auth/dailymotion',
auth.passport.authenticate('dailymotion', {scope: 'userinfo', session:false}));

router.get('/auth/dailymotion/callback',
auth.passport.authenticate('dailymotion', { failureRedirect: '/login'}),
function(req, res, user) {
  // Successful authentication, redirect home.
    return res.redirect('http://localhost:3000');
});



module.exports = router;
var express = require('express');
var router = express.Router();
var auth = require('../auth');
var db = require('../db/index');
/* GET home page. */

router.get('/',
function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.get('/auth/dailymotion',
auth.passport.authenticate('dailymotion', {scope:'manage_videos', session:false}));

router.get('/auth/dailymotion/callback',
auth.passport.authenticate('dailymotion', { failureRedirect: '/login'}),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('http://localhost:3100');
});

module.exports = router;
var express = require('express');
var router = express.Router();
var db = require('../db/queries');
var auth = require('../auth');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', db.getUsers);

router.get('/videos', db.getVideos);

router.post('/upload', db.postVideo);

// router.post('/userVid', db.postUserVid);

//wildcards must be at the end or a unique url ie. /1/:id to avoid errors
router.get('/:id', db.getOneUser);

router.get('/videos/:userId', db.getUserVideos);

router.get('/likes/:userId', db.getUserLikes);

router.get('/watch/:userId', db.getUserWatch);


module.exports = router;

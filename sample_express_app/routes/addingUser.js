var express = require('express');
var data = require('../datastore/activity.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var userFirstName = req.query.fname;
    var userLastName = req.query.lname;

  res.render('adduser', data);
});

module.exports = router;
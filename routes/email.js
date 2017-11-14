var express = require('express');
var router = express.Router();
var Email = require('../models/email');

router.post('/subscribe', function(req, res, next){
  var email = req.body.email;
  var user = new Email({
    email: email
  });
  user.save();
  res.redirect('/');
});

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../models/email');

router.post('/', function(req, res, next){
  useremail = req.body.email;
  var user = new User({
    email: useremail
  });
  user.save(function(err, result){
    if(err) {
      return res.status(500).json({
        title: 'An Error Occurred',
        error: err
      });
    }
    res.status(201).json({
      message: 'Saved Email',
      obj: result
    });
  });
});

module.exports = router;

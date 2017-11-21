var express = require('express');
var router = express.Router();
var Message = require('../models/messages');


router.get('/', function(req, res, next){
  Message.find()
          .exec(function(err, messages){
            if(err) {
              return res.status(500).json({
                title: 'An Error Occurred',
                error: err
              });
            }
            res.status(200).json({
              message: 'Success',
              obj: messages
            });
          });
});

module.exports = router;

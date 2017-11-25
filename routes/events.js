var express = require('express');
var router = express.Router();
var Message = require('../models/messages');


router.get('/', function(req, res, next){
  Message.find({}, null, {sort: {'obj.date': 1}})
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
router.get('/arts', function(req, res, next){
  Message.find({type: '1'})
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
router.get('/community', function(req, res, next){
  Message.find({type: '3'})
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
router.get('/music', function(req, res, next){
  Message.find({type: '2'})
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

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('1xaEBs7XxCRdOvCSkj7yyfDDiUr2Xu0Wx2pHut9UlQw.SiTFLPVClwfcVf0QAe9ZRDdAyKhE_XCNzWn_hrqsooA');
});


module.exports = router;

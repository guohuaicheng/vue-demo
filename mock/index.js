var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gg', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.end("ggg");
});

module.exports = router;
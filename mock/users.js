var express = require('express');
var request = require('request');

var router = express.Router();


/* GET users listing. */

router.use(function(req, res, next){
  console.log("ddd");
    next();
})

router.route('/').get(function(req, res) {
  request.get('http://192.168.218.129:8081/api/json', function(err, response, body) {
    res.send(body);
  }).auth('admin', 'admin', true);
})
module.exports = router;

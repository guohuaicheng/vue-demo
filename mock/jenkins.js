var express = require("express")
var request = require("request")
var router = express.Router();

router.use(function(req, res, next) {
  var source = "http://192.168.218.129:8081" + req.path;
  if(req.method) {
    switch(req.method.toLowerCase()) {
      case "get":
        //request.get(source, function(req, res, body){
        //  //next();
        //}).auth("admin", "admin", true).pipe(res);

        request.get(source, function(err, response, body){
          //next();
          res.send(body);
        }).auth("admin", "admin", true);
        break;
      case "post":
        request.post({
          url: source,
          headers: {
            "Content-Type":"application/xml"
          },
          'auth': {
            'user': 'admin',
            'pass': 'admin',
            'sendImmediately': true
          },
          qs:req.query//,
          //body: req.body
        }, function(err, response, body){
          //next();
          res.send(body);
        })
        break;
      case "put":
        break;
      case "delete":
        break;
    }
  }
});
//
//router.route("/*").get(function(req, res) {
//  res.send("ddd");
//}).post(function(req, res) {
//
//}).put(function(req, res) {
//
//}).delete(function(req, res) {
//
//})

module.exports = router;
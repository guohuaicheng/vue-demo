const Webpack = require('webpack')
  // const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')
const express = require('express')
const path = require('path')
const history = require("connect-history-api-fallback")
const app = express();
const compiler = Webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));
app.use(history(null));
app.all("*", function(req, res, next) {
  if(req.url.indexOf("api") != -1) {
    res.end("gggwww");
  } else {
    next();
  }
})
app.get('*', function response(req, res) {
  console.log("ggg*********************************************");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3002);
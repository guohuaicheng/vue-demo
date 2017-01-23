const Webpack = require('webpack')

const webpackConfig = require('./webpack.config')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const path = require('path')
const history = require("connect-history-api-fallback")
const app = express();
const compiler = Webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler, {
  historyApiFallback: true,
  publicPath: "/",
  stats: {
    colors: true //显示不同的颜色区分打包的文件
  },
  proxy: {
    '/api/*': {
      target: 'http://localhost:8085/default',
      secure: false,
      // pathRewrite: { '^/api': '' }
    }
  }
}));
app.use(webpackHotMiddleware(compiler));
// app.use(history(null));
// const staticFileMiddleware = express.static('assets');
// app.use(staticFileMiddleware);
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
// app.use(staticFileMiddleware);
// app.use(express.static(__dirname + '/dist'));
app.all("*", function(req, res, next) {
  if (req.url.startsWith("/api")) {
    console.log("http://localhost:8085/default" + req.url)
    require("request")("http://localhost:8085/default" + req.url, (error, response, body) => {
      console.log("error:" + error);
      console.log("response:" + response);
      console.log("body:" + body);
      res.json(response);
    })
    // res.json("gggwww");
  } else {
    next();
  }
})
app.get('*', function response(req, res) {
  console.log("ggg*********************************************");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3002);
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  publicPath: "/",
  stats: {
    colors: true //显示不同的颜色区分打包的文件
  },
  proxy: {
    '/api/*': {
      target: 'http://localhost:8080/default/rest/services',
      secure: false,
      pathRewrite: { '^/api': '' }
    }
  }
})

// server.app.all("*", function(req, res, next) {
//   if(req.originalUrl.indexOf("api") != -1) {
//     res.end("gggwww");
//   } else {
//     next();
//   }
// })

server.app.get("*", function(req, res) {
    res.sendFile(__dirname + '/index1.html');
  })
  // server.use(history());
server.listen(3002, (err) => {
  if(err) {
    console.log(err)
    return
  }
  console.log('http://localhost:3002')
})
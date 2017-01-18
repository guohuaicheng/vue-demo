// var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
// var jquery = require("jquery")

module.exports = {
  entry: {
    app: './src/main.js',
    vendors: ["jquery"]
  },
  output: {
    filename: 'bundle.js',
    // path: 'c:/nginx-1.11.2/html',
    path: __dirname + '/dist',
    chunkFilename: 'js/[id].chunk.js',
    publicPath: "/"
  },

  // // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',
  devtool: '#eval-source-map',

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.css', '.vue']

  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
      loader: 'file-loader',
      query: {
        name: '[name].[ext]?[hash]'
      }
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: './index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new CopyWebpackPlugin([{
      from: 'src/common/images',
      to: 'images'
    }
    ])
  ],
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    //其实很简单的，只要配置这个参数就可以了
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
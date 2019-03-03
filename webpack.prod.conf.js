const webpackMerge = require('webpack-merge')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base.conf');

module.exports = webpackMerge(baseConfig, {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     { loader: 'css-loader', options: { importLoaders: 1 } },
      //     'sass-loader'
      //   ]
      // }
    ]
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextWebpackPlugin.extract([ 'css-loader' ])
  //     }
  //   ]
  // },
  // plugins: [
  //   new ExtractTextWebpackPlugin({
  //     filename: "styles/[name].css",
  //   })
  // ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  }
})

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const scripts = glob.sync('./src/scripts/entries/**/*.js')
  .reduce((prev, curr) => {
    const re = /^\.\/src\/scripts\/([^.]+)\.js$/.exec(curr)
    if (re && re.length > 1) {
      prev[re[1]] = curr
    }
    return prev
  }, {})

const injections = Object.keys(scripts)
  .filter(key => key.startsWith('entries'))
  .map(key => {
    const html = `${key.slice(8)}.html`
    const filename = `./pages/${html}`
    const filepath = `./src/pages/${html}`
    return new HtmlWebpackPlugin({
      filename,
      template: `ejs-compiled-loader!${filepath}`,
      inject: true,
      chunks: [key],
      data: {
        entryName: key
      }
    })
  })

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

const styleGroups = Object.keys(scripts)
  .map(key => key.slice(8))
  .reduce((prev, curr) => {
    prev[`${curr}Styles`] = {
      name: curr,
      test: (m, c, entry) => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
      chunks: 'all',
      enforce: true
    }
    return prev
  }, {})

module.exports = {
  entry: scripts,
  output: {
    path: path.join(__dirname, 'build'),
    filename: './scripts/[name].js',
    publicPath: '/build/'
  },
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, 'src/styles'),
      'images': path.resolve(__dirname, 'src/images'),
      'locales': path.resolve(__dirname, 'locales')
    }
  },
  externals: {
    jquery: 'jQuery',
    bootstrap: 'jQuery'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'url-loader' },
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 8192
          //   }
          // },
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'images/',
              context: './src/images'
            }
          }
        ]
      },
      {
        test: /locales/,
        loader: '@alienfast/i18next-loader',
        query: {
          basenameAsNamespace: true
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial'
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.s?css$/,
        //   chunks: 'all',
        //   enforce: true
        // },
        ...styleGroups
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ].concat(injections)
}

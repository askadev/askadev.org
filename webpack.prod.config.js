const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill',
    './scripts/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-stage-0']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 2 versions',
                      'not ie < 10', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: false
              }
            }
          ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif|woff2?|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/'
        }
      }
    ],
  },
  externals: {
    'google': 'google'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./scripts')
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ExtractTextPlugin('css/main-[hash].css'),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
      minify: {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};

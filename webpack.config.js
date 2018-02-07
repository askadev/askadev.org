const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './scripts/application.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']}) ],
        exclude: /node_modules/
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
                sourceMap: true
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
      },

    ],
  },
  externals: {
    'google': 'google'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/base.css'),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  }
};

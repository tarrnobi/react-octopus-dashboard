const path    = require('path');
const webpack = require('webpack');
const dotenv  = require('dotenv');
const utils   = require('./lib/utils/utils')
dotenv.load()
// env
const buildDirectory = './dist/';

module.exports = {
  entry: './lib/main.jsx',
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:7700/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'OCTOPUS_API_KEY': '"{0}"'.format(process.env.OCTOPUS_API_KEY),
        'OCTOPUS_SERVER' : '"{0}"'.format(process.env.OCTOPUS_SERVER)
      }
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

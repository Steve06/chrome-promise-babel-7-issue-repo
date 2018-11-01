var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: {
  	bg: ['./build/bg.js'],
    "chrome-promise": ['./build/chrome-promise.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [{ 
      test: /\.js$/, 
      exclude: [/node_modules/],
      loader: "babel-loader" 
    }]
  }
};
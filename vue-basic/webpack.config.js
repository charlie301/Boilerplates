var webpack = require('webpack');

module.exports = {

  entry: __dirname + '/src/main',

  output: {
    path: __dirname + '/public/js',
    filename: 'site.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },

  babel: {
    presets: ['es2015']
  }

};

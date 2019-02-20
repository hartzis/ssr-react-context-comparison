var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    'server.react.legacy': './assets/src/server.react.legacy.js',
    'server.react.mix': './assets/src/server.react.mix.js',
    'server.react.new': './assets/src/server.react.new.js',
    'server.react.none': './assets/src/server.react.none.js',
  },
  output: {
    filename: './assets/build/[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders:[
      {
        test: /(preact|rax|react|.)\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'react', 'stage-0']
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"',
        'BUNDLE': 'true'
      }
    }),
  ]
};
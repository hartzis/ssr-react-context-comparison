var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {

  entry: {
    'client.react.legacy': './assets/src/client.react.legacy.js',
    'client.react.mix': './assets/src/client.react.mix.js',
    'client.react.new': './assets/src/client.react.new.js',
    'client.react.none': './assets/src/client.react.none.js',
  },
  output: {
    filename: './assets/build/[name].bundle.js'
  },
  module: {
    loaders:[
      // react & rax & styles.js
      {
        test: /(rax|p?react|.)\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'react', 'stage-0']
        }
      },
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
};
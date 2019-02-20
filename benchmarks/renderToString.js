'use strict';

/**
 * compare renderToString
 */

const Benchmark = require('benchmark');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ReactApp = require('../assets/build/server.react.bundle').default;

const path = require('path');

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

const suite = new Benchmark.Suite;

suite
  .add('React#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactApp, data));
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });

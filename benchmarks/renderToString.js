'use strict';

/**
 * compare renderToString
 */

const Benchmark = require('benchmark');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ReactAppLegacy = require('../assets/build/server.react.legacy.bundle').default;
const ReactAppMix = require('../assets/build/server.react.mix.bundle').default;
const ReactAppNew = require('../assets/build/server.react.new.bundle').default;
const ReactAppNone = require('../assets/build/server.react.none.bundle').default;

const path = require('path');

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

const suite = new Benchmark.Suite;

suite
  .add('React#legacyContext#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactAppLegacy, data));
  })
  .add('React#mixContext#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactAppMix, data));
  })
  .add('React#newContext#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactAppNew, data));
  })
  .add('React#noContext#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactAppNone, data));
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

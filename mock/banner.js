'use strict';

module.exports = Array
  .from(Array(6))
  .map((undef, i) => {
    return {
      title: 'banner ' + i,
      img: 'https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg'
    };
  });
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.throttlify = factory());
}(this, (function () { 'use strict';

var throttlify = function throttlify (func, delay) {
  if ( delay === void 0 ) delay = 250;

  if (typeof func !== 'function') {
    throw new Error('function must be provided for trottle')
  }

  var shouldWait = false;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!shouldWait) {
      func.apply(void 0, args);
      shouldWait = true;
      setTimeout(function () {
        shouldWait = false;
      }, delay);
    }
  }
};

return throttlify;

})));

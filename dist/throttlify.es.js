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

export default throttlify;

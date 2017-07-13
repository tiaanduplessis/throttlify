const throttlify = function throttlify (func, delay = 250) {
  if (typeof func !== 'function') {
    throw new Error('function must be provided for trottle')
  }

  let shouldWait = false

  return (...args) => {
    if (!shouldWait) {
      func(...args)
      shouldWait = true
      setTimeout(() => {
        shouldWait = false
      }, delay)
    }
  }
}

export default throttlify

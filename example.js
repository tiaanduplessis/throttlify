import throttlify from '@tiaanduplessis/throttlify'

const log = (...args) => console.log(...args)
const throttledLog = throttlify(log, 400) 

throttledLog('First Foo!') 
throttledLog('Ignored Foo!')
throttledLog('Ingored Foo!')

// First Foo!
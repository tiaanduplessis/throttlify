
# @tiaanduplessis/throttlify
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/throttlify.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/throttlify)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/throttlify.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/throttlify)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/throttlify.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/throttlify)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Little throttle function

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/throttlify
$ # OR
$ yarn add @tiaanduplessis/throttlify
```

## Usage

```js
import throttlify from '@tiaanduplessis/throttlify'

const log = (...args) => console.log(...args)
const throttledLog = throttlify(log, 400) 

throttledLog('First Foo!') 
throttledLog('Ignored Foo!')
throttledLog('Ingored Foo!')

// First Foo!
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    
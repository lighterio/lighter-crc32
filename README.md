# lighter-crc32
[![Chat](https://badges.gitter.im/chat.svg)](//gitter.im/lighterio/public)
[![Version](https://img.shields.io/npm/v/lighter-crc32.svg)](//www.npmjs.com/package/lighter-crc32)
[![Downloads](https://img.shields.io/npm/dm/lighter-crc32.svg)](//www.npmjs.com/package/lighter-crc32)
[![Build](https://img.shields.io/travis/lighterio/lighter-crc32.svg)](//travis-ci.org/lighterio/lighter-crc32)
[![Coverage](https://img.shields.io/coveralls/lighterio/lighter-crc32/master.svg)](//coveralls.io/r/lighterio/lighter-crc32)
[![Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](//www.npmjs.com/package/standard)

The `lighter-crc32` module is a lightweight CRC32 calculator.

It supports:
* Constructors (`Type.prototype.init`)
* Prototypal inheritance (`Type.extend`)
* Multiple inheritance (`Type.decorate`)
* Non-enumerable property definitions (`Type.hide`)


## Installation

From your project directory, install and save as a dependency:
```bash
npm install --save lighter-crc32
```


## API

Just pass a string or buffer to the crc32 function to get a CRC32 integer.

```javascript
var crc32 = require('lighter-crc32')
var a = crc32('String to hash')
var b = crc32(new Buffer('Buffer to hash'))
```


## More on lighter-crc32...
* [Contributing](//github.com/lighterio/lighter-crc32/blob/master/CONTRIBUTING.md)
* [License (ISC)](//github.com/lighterio/lighter-crc32/blob/master/LICENSE.md)
* [Change Log](//github.com/lighterio/lighter-crc32/blob/master/CHANGELOG.md)
* [Roadmap](//github.com/lighterio/lighter-crc32/blob/master/ROADMAP.md)

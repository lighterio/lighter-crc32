var crc32 = require('../lighter-crc32')
var xxhash = require('xxhash')

describe('CRC32', function () {

  var i = 0
  this.passCount = 1e6

  bench('benchmark', function () {

    it('crc32', function () {
      crc32('object' + (++i))
      if (i === 1e6) {
        i = 0
      }
    })

    /*
    it('xxhash', function () {
      var b = new Buffer('object' + (++i))
      xxhash(b, 0xCAFEBABE)
      if (i === 1e6) {
        i = 0
      }
    })
    */

  })

})

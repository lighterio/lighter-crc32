/* global describe it */

var crc32 = require('../lighter-crc32')
var is = global.is || require('exam/lib/is')

describe('CRC32', function () {
  it('works for ASCII', function () {
    var check = crc32('Hash©')
    is(check, 2668842037)
  })
  it('works for UTF-8', function () {
    var check = crc32('☀')
    is(check, 17260270)
  })
  it('works for buffers', function () {
    var check = crc32(new Buffer('buf'))
    is(check, 1116442498)
  })
})

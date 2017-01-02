/* global bench it */
var crc32 = require('../lighter-crc32')
try {
  var Xxhash = require('xxhash')
} catch (ignore) {
  // Nevermind.
}

bench('Hashing', function () {
  var i = 0
  it('crc32', function () {
    crc32('This is a hashable string ' + ++i)
  })

  var j = 0
  if (Xxhash) {
    it('xxhash', function () {
      var b = new Buffer('This is a hashable string ' + ++j)
      b = new Xxhash(b, 0xCAFEBABE)
    })
  }
})

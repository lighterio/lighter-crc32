/* global bench it */
var crc32 = require('../lighter-crc32')
var Xxhash = require('xxhash')

bench('Hashing', function () {
  var i = 0
  it('crc32', function () {
    crc32('This is a hashable string ' + ++i)
  })

  var j = 0
  it('xxhash', function () {
    var b = new Buffer('This is a hashable string ' + ++j)
    b = new Xxhash(b, 0xCAFEBABE)
  })
})

/**
 * Calculate a CRC32 value for a string.
 *
 * @param  {String|Buffer} s  A string or buffer to calculate a CRC on.
 * @return {Number}           A cyclic redundancy check integer.
 */
module.exports = function crc32 (s) {
  if (typeof s !== 'string') {
    s = s.toString()
  }
  var l = s.length
  var a = new Array(l)
  for (var i = 0, n = 0, c; i < l; ++i) {
    c = s.charCodeAt(i)
    if (c < 128) {
      a[n++] = c
    } else if (c < 2048) {
      a[n++] = (c >> 6) | 192
      a[n++] = (c & 63) | 128
    } else {
      a[n++] = (c >> 12) | 224
      a[n++] = ((c >> 6) & 63) | 128
      a[n++] = (c & 63) | 128
    }
  }
  var v = -1
  l = a.length
  for (i = 0; i < l; ++i) {
    c = (v ^ a[i]) & 255
    v = (v >>> 8) ^ t[c]
  }
  return (v ^ -1) >>> 0
}

// Build the cache table.
var t = []
for (var i = 0, j, v; i < 256; ++i) {
  v = i
  j = 8
  while (j--) {
    if ((v & 1) === 1) {
      v = (v >>> 1) ^ 3988292384
    } else {
      v >>>= 1
    }
  }
  t[i] = v >>> 0
}

'use strict'

var test = require('tape')
var deglob = require('../')

var globs = ['fixture/one.txt', 'fixture/one.txt', 'fixture/t*.txt', 'fixture/**/*.wild']
var options = {cwd: __dirname}
var path = require('path')

test('deglob async', function (t) {
  t.plan(1)
  deglob(globs, options, function (err, files) {
    if (err) return t.end(err)
    t.deepEqual(files, allFiles)
  })
})

test('deglob sync', function (t) {
  var files = deglob.sync(globs, options)
  t.deepEqual(files, allFiles)
  t.end()
})

var allFiles = [
  path.resolve(__dirname, 'fixture/one.txt'),
  path.resolve(__dirname, 'fixture/three.txt'),
  path.resolve(__dirname, 'fixture/two.txt'),
  path.resolve(__dirname, 'fixture/wildcard/subdirectory/one.wild'),
  path.resolve(__dirname, 'fixture/wildcard/subdirectory/two.wild')
]

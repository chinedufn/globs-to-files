var test = require('tape')
var deglob = require('../')

var globs = ['fixture/one.txt', 'fixture/t*.txt', 'fixture/**/*.wild']
var options = {cwd: __dirname}

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
  'fixture/one.txt',
  'fixture/three.txt',
  'fixture/two.txt',
  'fixture/wildcard/subdirectory/one.wild',
  'fixture/wildcard/subdirectory/two.wild'
]

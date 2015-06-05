'use strict'

var glob = require('glob')
var reduce = require('asyncreduce')

exports = module.exports = globToFiles
exports.sync = globToFilesSync

function globToFiles (globs, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = null
  }

  reduce(globs, [], expand, done)

  function expand (accumulator, globPath, callback) {
    glob(globPath, options, function (err, files) {
      if (err) return callback(err)
      accumulator.push.apply(accumulator, files)
      callback(null, accumulator)
    })
  }

  function done (err, files) {
    if (err) return callback(err)
    callback(null, files)
  }
}

function globToFilesSync (globs, options) {
  return globs.reduce(function (files, globPath) {
    files.push.apply(files, glob.sync(globPath, options))
    return files
  }, [])
}

'use strict'

var glob = require('glob')
var path = require('path')
var reduce = require('asyncreduce')
var unique = require('array-uniq')

exports = module.exports = globToFiles
exports.sync = globToFilesSync

function globToFiles (globs, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = null
  }

  reduce(globs, [], expand, done)

  function expand (accumulator, globPath, next) {
    var absolute = options ? (options.cwd ? options.cwd : '') : ''
    glob(globPath, options, function (err, files) {
      if (err) return next(err)
      accumulator.push.apply(accumulator, files.map(function (file) {
        return path.resolve(absolute, file)
      }))
      next(null, accumulator)
    })
  }

  function done (err, files) {
    if (err) return callback(err)
    callback(null, unique(files))
  }
}

function globToFilesSync (globs, options) {
  var absolute = options ? (options.cwd ? options.cwd : '') : ''
  return globs.reduce(function (files, globPath) {
    files.push.apply(files, glob.sync(globPath, options))
    return unique(files.map(function (file) {
      return path.resolve(absolute, file)
    }))
  }, [])
}

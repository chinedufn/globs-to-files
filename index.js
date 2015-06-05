'use strict'

var glob = require('glob')

exports = module.exports = globToFiles
exports.sync = globToFilesSync

function globToFiles (files, options, cb) {
  if (typeof options === 'function') {
    cb = options; options = null
  }

  var expandedFiles = []
  var totalGlobs = files.length
  var globsProcessed = 0
  for (var i = 0; i < totalGlobs; i++) {
    glob(files[i], options, function (err, files) {
      if (err) return cb(err)
      expandedFiles = expandedFiles.concat(files)
      if (++globsProcessed === totalGlobs) {
        cb(null, expandedFiles)
      }
    })
  }
}

function globToFilesSync (files, options) {
  var expandedFiles = []
  files.forEach(function (arg) {
    expandedFiles = expandedFiles.concat(glob.sync(arg, options))
  })
  return expandedFiles
}

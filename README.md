globs-to-files [![Build Status](https://travis-ci.org/chinedufn/metalsmith-watcher.svg?branch=master)](https://travis-ci.org/chinedufn/globs-to-files)
================

> Expand multiple globs into absolute file paths

## Install

```
$ npm install --save globs-to-files
```

## Usage

```js
var deglob = require('globs-to-files')

deglob(['test/**/*.js', 'src/*.js'], null, function (err, files) {
})

var files = deglob.sync(['test/**/*.js'])
```

## API

#### `deglob(globArray, [options], callback)` -> `array[string]`

##### globArray

*Required*
Type: `array`

An array of globs to be expanded into absolute file paths.

##### options

Type: `object`  

Options to pass to [node-glob](https://github.com/isaacs/node-glob#options).

##### callback

*Required*
Type: `function`

Callback to call with file paths.

## License

MIT

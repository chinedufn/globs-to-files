globs-to-files
================

Create a file array from a glob array

### Usage

```js
var deglob = require('globs-to-files')

deglob(['test/\*\*/\*.js', 'src/\*.js'], null, function (err, files) {
})

var files = deglob.sync(['test/\*\*/\*.js'])
```

### API

`deglob(globArray, [options], cb)` -> `array`

*****globArray**

*Required*

Type: `string`

An array of globs to be expanded

**options**

`globs-to-files` uses [node-glob](https://github.com/isaacs/node-glob#options)

**cb**

*Required*

Type: `function`

`globs-to-files` uses [node-glob](https://github.com/isaacs/node-glob#globpattern-options-cb)

### To Test

```js
npm test
```

### License

MIT

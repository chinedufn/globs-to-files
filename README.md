globs-to-files
================

> Expand multiple globs into file paths

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

An array of globs to be expanded.

##### options

Type: `object`  

Options to pass to [node-glob](https://github.com/isaacs/node-glob#options).

##### callback

*Required*  
Type: `function`

Callback to call with file paths.

## License

MIT

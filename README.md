![nails-framework](https://f.cloud.github.com/assets/1144357/2225403/4529567e-9a8d-11e3-80a4-23ba637b5f26.png)

nails-utils
===============

General purpose utilities for your node project. Used in [Nails Framework](nails) and associated projects.

# Included Modules

**nails-utils** exports every method from [Hoek](http://ghub.io/hoek) as well as the following modules:

| Name                 | Module                                          |
| :------------------- | ----------------------------------------------: |
| exports.**error**    | [Boom](http://ghub.io/boom)                     |
| exports.**joi**      | [Joi](http://ghub.io/joi)                       |
| exports.**is**       | [Is](http://ghub.io/is)                         |
| exports.**path**     | [path](http://nodejs.org/api/path.html)         |
| exports.**url**      | [url](http://nodejs.org/api/url.html)           |
| exports.**fs**       | [graceful-fs](http://ghub.io/graceful-fs)       |
| exports.**glob**     | [glob](http://ghub.io/glob)                     |
| exports.**chalk**    | [chalk](http://ghub.io/chalk)                   |
| exports.**string**   | [string](http://ghub.io/string)                 |
| exports.**Promise**  | [bluebird](http://ghub.io/bluebird)             |
| exports.**request**  | [request](http://ghub.io/request)               |

# Extra Methods

## DummyLogger
A DummyLogger stores messages internally and doesn't output anything. It implements the same methods as an [Intel Logger](http://ghub.io/intel). Logged messages can be retrieved later by calling `DummyLogger#getLogs()`.

Can be used to buffer log messages until [Intel](http://ghub.io/intel) has been initialized.

### DummyLogger#getLogs()
Returns an array of log objects in the form: 
```javascript
[
  { 'level': String, 'args': arguments }
]
```

**Note:** `args` is a reference to the function's `arguments` value and is not a proper `Array`.

### Example

```javascript
var utils = require('nails-utils');

// Create a DummyLogger
var log = new utils.DummyLogger();

// Log some messages
log.info('Welcome to my application!');
log.error('Something Broke', new Error('oh the humanity'));

// .. set up your app, load configs, etc

// Get messages
var messages = log.getLogs();

// Override log with intel
log = require('intel');

// Log buffered messages
messages.forEach(function(msg) {
  log[msg.level].apply(log, msg.args);
});
```

## finder(options, callback)
Finds files that match a given pattern. `callback` is called for every file found (like `Array#forEach`)

`options` (**Object**)
 * `pattern` (**String**) - A [Glob](http://ghub.io/glob) pattern or `require` path.
 * `cwd` (**String**) - Base path. Defaults to `process.cwd()`.

`options` (**String**)
The same as `{ pattern: String }`

`callback(filename, totalFiles)` (Function)
 * `filename` (**String**) - The fully resolved filename.
 * `totalFiles` (**Number**) - The total number of files found.

### Example
```javascript
var utils = require('nails-utils');
var plugins = [];

var options = {
  pattern: './plugins/**/*.js',
  cwd: __dirname
};

utils.finder(options, function(filename, total) {
  plugins.push(require(filename));
});
```

## random(min, max)
Returns a random `Number` between `min` and `max`.
 * `min` (**Number**) - Minimum Number
 * `max` (**Number**) - Maximum Number
 
# Licence

The MIT License (MIT)

Copyright (c) 2014 James Wyse <james@jameswyse.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

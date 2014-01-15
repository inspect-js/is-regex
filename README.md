#is-regex <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8]

[![npm badge][11]][1]

[![browser support][9]][10]

Is this value a JS regex?

## Example

```js
var isRegex = require('is-regex');
var assert = require('assert');

assert.notOk(isRegex(undefined));
assert.notOk(isRegex(null));
assert.notOk(isRegex(false));
assert.notOk(isRegex(true));
assert.notOk(isRegex(42));
assert.notOk(isRegex('foo'));
assert.notOk(isRegex(function () {}));
assert.notOk(isRegex([]));
assert.notOk(isRegex({}));

assert.ok(isRegex(/a/g));
assert.ok(isRegex(new RegExp('a', 'g')));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[1]: https://npmjs.org/package/is-regex
[2]: http://vb.teelaun.ch/ljharb/is-regex.svg
[3]: https://travis-ci.org/ljharb/is-regex.png
[4]: https://travis-ci.org/ljharb/is-regex
[5]: https://david-dm.org/ljharb/is-regex.png
[6]: https://david-dm.org/ljharb/is-regex
[7]: https://david-dm.org/ljharb/is-regex/dev-status.png
[8]: https://david-dm.org/ljharb/is-regex#info=devDependencies
[9]: https://ci.testling.com/ljharb/is-regex.png
[10]: https://ci.testling.com/ljharb/is-regex
[11]: https://nodei.co/npm/is-regex.png?downloads=true&stars=true


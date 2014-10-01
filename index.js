'use strict';

var _toString = Object.prototype.toString;
var regexType = '[object RegExp]';

module.exports = function isRegex(value) {
	return _toString.call(value) === regexType;
};


"use strict";

var toString = Object.prototype.toString;
var regexType = '[object RegExp]';

module.exports = function isRegex(value) {
	return toString.call(value) === regexType;
};


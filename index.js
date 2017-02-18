'use strict';

var regexExec = RegExp.prototype.exec;
var tryRegexExecCall = function tryRegexExec(value) {
	try {
		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryRegexExecCall(value) : toStr.call(value) === regexClass;
};

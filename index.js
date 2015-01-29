'use strict';

var regexExec = RegExp.prototype.exec;

var tryRegexExec = function tryRegexExec(value) {
	try {
		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

module.exports = function isRegex(value) {
	if (typeof value !== 'object') { return false; }
	return tryRegexExec(value);
};

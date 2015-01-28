'use strict';

var regexExec = RegExp.prototype.exec;

module.exports = function isRegex(value) {
	try {
		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	}
};


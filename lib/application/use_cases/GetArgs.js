"use strict";

module.exports = () => {
	let args = process.argv;
	args = args.slice(2);
	if (!args) {
		throw new Error("[ERROR] Need params to work!");
	}
	return args[0];
};

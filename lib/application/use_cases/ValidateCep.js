"use strict";

module.exports = (cep) => {
	const regex = /^[0-9]*$/g;

	if (!regex.test(cep)) {
		throw new Error("[ALERT] character is not allow");
	}

	if (cep.length < 8) {
		throw new Error("[ALERT] insert a CEP valid");
	}
};

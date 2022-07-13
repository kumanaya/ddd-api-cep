const axios = require("axios").default;

module.exports = (baseURL) => {
	const instance = axios.create({
		baseURL: baseURL,
	});

	return instance;
};

const CepRepository = require("./CepRepositoryAxios");

const repositories = {
	ceps: CepRepository,
};

module.exports = {
	get: (name) => repositories[name],
};

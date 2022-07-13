const instance = require("../http/axios/axios");
const Ceps = require("../../domain/Cep");
const constants = require("../config/constants");

const CepRepository = {
	async getByCep(cep) {
		const { data } = await instance(constants.VIA_CEP).get(`${cep}/json`);
		return new Ceps(
			data.cep,
			data.logradouro,
			data.complemento,
			data.bairro,
			data.localidade,
			data.uf
		);
	},
};

module.exports = CepRepository;

"use strict";

const _serializeSingleUser = (data) => {
	return {
		zip: data.cep,
		address: data.logradouro,
		complement: data.complemento,
		neighborhood: data.bairro,
		city: data.localidade,
		state: data.uf,
	};
};

module.exports = class {
	serialize(data) {
		if (!data) {
			throw new Error("[ERROR] Expect data to be not undefined nor null");
		}
		if (Array.isArray(data)) {
			return data.map(_serializeSingleUser);
		}
		return _serializeSingleUser(data);
	}
};

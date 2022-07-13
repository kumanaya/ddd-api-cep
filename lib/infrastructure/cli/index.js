const GetArgs = require("../../application/use_cases/GetArgs");
const ValidateCep = require("../../application/use_cases/ValidateCep");

const Repository = require("../../infrastructure/repositories/RepositoryFactory");
const CepRepository = Repository.get("ceps");

if (require.main === module) {
	main();
}

async function main() {
	try {
		let result = [];

		const cep = GetArgs();
		ValidateCep(cep);

		result = await CepRepository.getByCep(cep);
		console.log(JSON.stringify(result, null, 2));
	} catch (error) {
		console.log(error);
	}
}

var http = require("http");

try {
	const args = process.argv;
	const cep = args.slice(2);
	const regex = /^[0-9]*$/g;

	if (!cep.length) {
		console.log("[ALERT] insert a CEP valid");
		process.exit();
	}

	if (regex.test(cep)) {
		const options = {
			host: "viacep.com.br",
			path: `/ws/${cep}/json/`,
		};

		callback = function (response) {
			if (response.statusCode == 200) {
				response.on("data", function (chunk) {
					console.log(chunk.toString());
				});
			} else if (response.statusCode == 400) {
				console.log("[ALERT] CEP not found");
			}
		};

		http.request(options, callback).end();
	} else {
		console.error("[ALERT] character is not allow");
	}
} catch (error) {
	console.error("[ERROR] " + error);
}

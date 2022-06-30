const axios = require("axios").default;

if (require.main === module) {
  main();
}

function main() {
  const cep = getArgs();
  const isValidCep = validateCep(cep);

  if (!isValidCep) {
    process.exit();
  }

  getAddress(cep);
}

function getArgs() {
  const args = process.argv;
  const cep = args.slice(2);
  return cep[0];
}

function validateCep(cep) {
  const regex = /^[0-9]*$/g;
  let isValidCep = true;

  if (!regex.test(cep)) {
    console.log("[ALERT] character is not allow");
    isValidCep = false;
  }

  if (cep.length < 8) {
    console.log("[ALERT] insert a CEP valid");
    isValidCep = false;
  }

  return isValidCep;
}

function getAddress(cep) {
  const host = "https://viacep.com.br";
  const path = `/ws/${cep}/json/`;
  const url = host + path;
  axios
    .get(url)
    .then(function (response) {
      serverStatus(response);
    })
    .catch(function (error) {
      console.log("[ERROR] problem in requisition");
    })
    .then(function () {
      process.exit();
    });
}

function serverStatus(response) {
  const statusCode = response.status;

  switch (statusCode) {
    case 200:
      console.log(JSON.stringify(response.data, null, 2));
      break;
    case 400:
      console.log("[ALERT] CEP not found");
      break;

    default:
      console.log("[ALERT] Internal Server Error");
      break;
  }
}

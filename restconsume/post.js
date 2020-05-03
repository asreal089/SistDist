const REQ = require('request');

var novoRegistro = {
	name: 'bruce banner',
	job: 'Pesquisa Radiação Gama',
};

REQ.post(
	{
		headers: { 'content-type': 'application/json' },
		url: 'https://reqres.in/api/users/',
		body: JSON.stringify(novoRegistro),
	},
	(error, response, body) => {
		if (error) {
			return console.dir(error);
		}
		console.dir(JSON.parse(body));
	}
);

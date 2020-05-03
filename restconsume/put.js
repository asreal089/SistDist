const REQ = require('request');

var alteracao = {
	name: 'bruce banner',
	job: 'Pesquisa Radiação Gama',
};

REQ.put(
	{
		headers: { 'content-type': 'application/json' },
		url: 'https://reqres.in/api/users/2',
		body: JSON.stringify(alteracao),
	},
	(error, response, body) => {
		if (error) {
			return console.dir(error);
		}
		console.dir(JSON.parse(body));
	}
);

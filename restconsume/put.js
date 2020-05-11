const REQ = require('request');

var alteracao = {
	name: 'Hulk',
	job: 'The Strongest avenger',
};

REQ.put(
	{
		headers: { 'content-type': 'application/json' },
		url: 'https://reqres.in/api/users/960',
		body: JSON.stringify(alteracao),
	},
	(error, response, body) => {
		if (error) {
			return console.dir(error);
		}
		console.dir(JSON.parse(body));
	}
);

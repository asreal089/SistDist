const REQ = require('request');

REQ.get('https://reqres.in/api/users', (error, response, body) => {
	if (error) {
		return console.dir(error);
	}
	console.dir(JSON.parse(body));
});

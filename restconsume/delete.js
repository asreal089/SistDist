const REQ = require('request');

const options = {
	url: 'https://reqres.in/api/users/1',
	method: 'DELETE',
	headers: {
		Accept: 'application/json',
		'Accept-Charset': 'utf-8',
		'User-Agent': 'my-reddit-client',
	},
};

REQ.delete(options, function (err, res, body) {
	let json = JSON.parse(res.statusCode);
	console.log(json);
});

const REQ = require('request');

const options = {
	url: 'http://dummy.restapiexample.com/api/v1/delete/719',
	method: 'DELETE',
	headers: {
		Accept: 'application/json',
		'Accept-Charset': 'utf-8',
		'User-Agent': 'my-reddit-client',
	},
};

REQ.delete(options, function (err, res, body) {
	let json = JSON.parse(body);
	console.log(json);
});

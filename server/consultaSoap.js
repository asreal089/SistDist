const soap = require('soap');
var url = 'http://127.0.0.1:8000/wsdl?wsdl';
/*
soap.createClient(url, function (err, client) {
	if (err) return console.log(err);
	console.log(client);
});
*/
soap.createClient(url, function (error, client) {
	client.Add({ intA: 10, intB: 25 }, function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	});
});

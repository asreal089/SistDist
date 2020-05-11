const soap = require('soap');
var url = 'http://www.dneonline.com/calculator.asmx?WSDL';

soap.createClient(url, function (error, client) {
	if (error) {
		console.log(error);
		return;
	}
	console.log(client);
});

soap.createClient(url, function (error, client) {
	client.Add({ intA: 10, intB: 25 }, function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	});
});

soap.createClient(url, function (error, client) {
	client.Subtract({ intA: 10, intB: 25 }, function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	});
});

soap.createClient(url, function (error, client) {
	client.Multiply({ intA: 10, intB: 25 }, function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	});
});

soap.createClient(url, function (error, client) {
	client.Divide({ intA: 10, intB: 2 }, function (error, result) {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	});
});

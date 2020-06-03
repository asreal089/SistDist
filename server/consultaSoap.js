const soap = require('soap');
const url = 'http://localhost:3030/bmicalculator?wsdl';

soap.createClient(url, function (err, client) {
	if (err) console.error(err);
	else {
		client.calculateBMI({ weight: 80, height: 1.77 }, function (
			err,
			response
		) {
			if (err) console.error(err);
			else {
				console.log(response);
			}
		});
	}
});

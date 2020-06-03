const soap = require('soap');
const express = require('express');
const app = express();

const service = {
	BMI_Service: {
		BMI_Port: {
			calculateBMI(args) {
				const BMI = args.weight / (args.height * args.height);
				return { bmi: BMI };
			},
		},
	},
};
// xml data is extracted from wsdl file created
const xml = require('fs').readFileSync('./bmicalculator.wsdl', 'utf8');
//create an express server and pass it to a soap server
const server = app.listen(3030, function () {
	const host = '127.0.0.1';
	const port = server.address().port;
});
soap.listen(server, '/bmicalculator', service, xml);

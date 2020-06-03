var http = require('http');
var express = require('express');
var app = express();
var soap = require('soap');
var bodyParser = require('body-parser');
var myService = {
	MyService: {
		MyPort: {
			Add: function (args) {
				return {
					AddResponse: args.intA,
				};
			},
		},
	},
};

var xml = require('fs').readFileSync('wsdl.wsdl', 'utf8');

var app = express();
//body parser middleware are supported (optional)
app.use(
	bodyParser.raw({
		type: function () {
			return true;
		},
		limit: '5mb',
	})
);
app.listen(8000, function () {
	//Note: /wsdl route will be handled by soap module
	//and all other routes & middleware will continue to work
	soap.listen(app, '/wsdl', myService, xml, function () {
		console.log('server initialized');
	});
});

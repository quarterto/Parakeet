var React = require('react');
var route = require('boulevard').withFourOhFour(function(req) {
	return {
		body: `${req.url} not found`,
		status: 404
	};
});
var Test = require('./test.js');

module.exports = route({
	'/'(req) {
		return <Test/>;
	}
});
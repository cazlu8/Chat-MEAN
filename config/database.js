var mongoose = require('mongoose');

module.exports = function(uri) {

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Connected in ' + uri);
	}).on('disconnected', function() {
		console.log('Mongoose! Disconnected of ' + uri);
	}).on('error', function(erro) {
		console.log('Mongoose! Error in connection: ' + erro);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Mongoose! Disconnected by end of application');
			process.exit(0);
		});
	});
}
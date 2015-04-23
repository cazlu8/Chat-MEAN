module.exports = function verifyAuthentication(request, response, next) {
	if (request.isAuthenticated()) {
		return next();
	} else {
		response.status('401').json('not authenticated');

	}
}
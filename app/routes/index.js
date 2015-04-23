module.exports = function(app) {
	app.get('/', function(request, response) {
		var login = '';
		if(request.user) {
			login = request.user.login;
		} 
		response.render('index', { "userLoged" : login});
	});
};
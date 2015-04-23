	var passport = require('passport');
	module.exports = function(app) {


		app.get('/auth/github', passport.authenticate('github'));

		app.get('/auth/github/callback', passport.authenticate('github', {
			successRedirect: '/'
		}));


		app.get('/', function(request, response, next) {
			if (request.isAuthenticated()) {
				return next();
			} else {
				response.render('auth');
			}
		});
		
		app.get('/logout',function(request,response){
			request.logOut();
			response.redirect('/');
		})
	};
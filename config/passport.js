var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	
	var User = mongoose.model('User');

		passport.use(new GitHubStrategy({
		clientID: 'ae571e4409260a05afaf',
		clientSecret: '3768ffd1e8b2abd48344ad55d2a2bb8e36d2624c',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		User.findOrCreate(
			{ "login" : profile.username}, 
			{ "name" : profile.username},  
			function(erro, User) {
				if(erro) {
					console.log(erro);
					return done(erro);
				} 
				return done(null, User);
			}
		);
	}));

	passport.serializeUser(function(User, done) {
	  done(null, User._id);
	});
	 
	passport.deserializeUser(function(id, done) {
	  User.findById(id).exec()
	  .then(function(User) {
	  	done(null, User);	
	  });
	});
};
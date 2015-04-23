var verifyAuthentication = require('../../config/auth');
module.exports = function(app) {
	var contactController = app.controllers.contact;

	app.route('/contacts')
		.get(verifyAuthentication,contactController.listContacts)
		.post(verifyAuthentication,contactController.saveContact);

	app.route('/contacts/:id')
		.get(verifyAuthentication,contactController.getContact)
		.delete(verifyAuthentication,contactController.removeContact);


};
var page = require('./pages/contactPage');
describe('cadastre of contacts', function() {
	var contactPage = new page();
	beforeEach(function() {
		contactPage.visit();
	});
	it('must cadastre one contact', function() {
			var random = Math.floor((Math.random() * 10000000) + 1);
			var name = 'test' + random;
			var email = 'test@email' + random;

            contactPage.writeName(name);
            contactPage.writeEmail(email);
            contactPage.getFirstContactOfEmergencyOfList();
            contactPage.save();
            expect(contactPage.getMessageStatus()).toContain('sucess');
		
	});
});
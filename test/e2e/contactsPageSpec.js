var page = require('./pages/contactsPage');
describe('Main Page', function() {
	var contactsPage = new page();
	beforeEach(function() {
		contactsPage.visit();
	});

	it('must be logged', function() {
		contactsPage.getLoggedUser().then(function(text) {
			expect(text.trim().length).toBeGreaterThan(0);
		});
	});

	it('must remove one contact of list', function() {
		var beforeTotal = contactsPage.getTotalOfItensOfTheList();
		contactsPage.removeFirstItenOfList();

		var afterTotal = contactsPage.getTotalOfItensOfTheList();
		expect(afterTotal).toBeLessThan(beforeTotal);
	});

});
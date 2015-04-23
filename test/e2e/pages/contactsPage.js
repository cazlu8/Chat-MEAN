var contactsPage = function() {

	this.visit = function() {
		browser.get('http://localhost:3000/#/contacts');
	};

	this.getLoggedUser = function() {
		return element(by.id('user-logged')).getText();
	};

	this.getTotalOfItensOfTheList = function() {
		return element.all(by.repeater('contact in contacts')).count();
	};

	this.removeFirstItenOfList = function() {
		element(by.repeater('contact in contacts').row(0)).element(by.css('.btn')).click();
	};
};

module.exports= contactsPage;
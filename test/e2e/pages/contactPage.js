var contactPage = function() {

	this.visit = function() {
		browser.get('http://localhost:3000/#/contact');
	};

	this.writeName = function(name) {
		element(by.model('contact.name')).sendKeys(name);
	};

	this.writeEmail = function(email) {
		element(by.model('contact.email')).sendKeys(email);
	};

	this.save = function() {
		element(by.css('.btn-primary')).click();
	};

	this.getFirstContactOfEmergencyOfList = function() {
		element(by.css('option[value="0"]')).click();
	};

	this.getMessageStatus = function() {
		return element(by.binding('message.text')).getText();
	};

}

module.exports = contactPage;
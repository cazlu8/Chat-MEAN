exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: function() {
		browser.driver.get('http://localhost:3000/');
		browser.driver.findElement(by.id('enter')).click();
		browser.driver.findElement(by.id('login_field'))
			.sendKeys('cazlu8');
		browser.driver.findElement(by.id('password'))
			.sendKeys('werteyaryeaery');
		browser.driver.findElement(by.name('commit')).click();
	}

};
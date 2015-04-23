angular.module('chat').controller('ContactController', function($scope, $routeParams, Contact) {

	(function getContactPerId() {
		if ($routeParams.contactId) {
			Contact.get({
					id: $routeParams.contactId
				}).$promise
				.then(function(contact) {
					$scope.contact = contact;
				}).catch(function(error) {
					setTextMessage('not was possible get the contact');
					console.log(error);
				});
		} else {
			createNewContact();
		}
	})();

	$scope.save = function() {
		$scope.contact.$save()
			.then(function() {
				setTextMessage('saved with sucess!');
				createNewContact();
			})
			.catch(function(error) {
				setTextMessage('not was possible save the contact!');
				console.log(error)
			});
	}

	function createNewContact() {
		$scope.contact = new Contact();
	}

	function setTextMessage(text) {
		$scope.message = {
			text: text
		}
	}

	Contact.query(function (contacts){
		$scope.contacts = contacts
	});

});
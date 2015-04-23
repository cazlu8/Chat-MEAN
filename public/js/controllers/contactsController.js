angular.module('chat').controller('ContactsController', function($scope, Contact) {
	$scope.filterContact = '';
	
	function getAllContacts() {
		var getContacts = Contact.query().$promise;
		getContacts
			.then(function(contacts) {
				$scope.contacts = contacts;
			}).catch(function(statusText) {
				setTextMessage('not was possible get the list of contacts');
				console.log(statusText);
			});
	}
	getAllContacts();

	$scope.remove = function(contact) {
		var removeContact = Contact.delete({
			id: contact._id
		}).$promise;
		removeContact
			.then(getAllContacts)
			.catch(function(error) {
				setTextMessage('not was possible remove the contact');
				console.log(error);
			});
	}

	function setTextMessage(text) {
		$scope.message = {
			text: text
		}
	}
});
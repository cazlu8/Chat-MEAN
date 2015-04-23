angular.module('chat', ['ngRoute','ngResource']).config(function ($routeProvider) {
	
	$routeProvider.when('/contacts',{
		templateUrl:'partials/contacts.html',
		controller:'ContactsController'
	});
    $routeProvider.when('/contact/:contactId', {
        templateUrl:'partials/contact.html',
        controller:'ContactController'
    });
    $routeProvider.when('/contact', {
    	templateUrl : 'partials/contact.html',
    	controller: 'ContactController'
    });

    $routeProvider.otherwise({redirectTo:'/contacts'});

});


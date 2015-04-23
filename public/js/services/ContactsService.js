angular.module('chat').factory('Contact', function($resource) {
	return $resource('/contacts/:id');
});
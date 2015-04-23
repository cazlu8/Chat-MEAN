angular.module('chat').factory('Contact', ["$resource", function($resource) {
	return $resource('/contacts/:id');
}]);
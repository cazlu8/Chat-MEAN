describe("ContactController", function() {
	$scope;
	beforeEach(function() {
		module('chat');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new(),
				$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/contacts/1').respond({
				_id: 1
			});
			$httpBackend.when('GET', '/contacts').respond([{}]);
		});
	});

	it("must build a contact empty when the parameters of route not is transmitted", inject(function($controller) {
		$controller('ContactController', {
			"$scope": $scope
		});
		expect($scope.contact._id).toBeUndefined();
	}));

	it('must build a contact when parameter is transmitted', inject(function($controller) {
		$controller('ContactController', {
			'$routeParams': {
				contactId: 1
			},
			'$scope': $scope
		});
		$httpBackend.flush();
		expect($scope.contact._id).toBeDefined();
	}));
});
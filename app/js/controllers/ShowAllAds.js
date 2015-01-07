app.controller('ListAds', ['$scope', '$log', 'serviceHandler', function($scope, $log, serviceHandler) {
	$scope.headerTitle = 'Home';
	$scope.adsLoaded = false;

	serviceHandler.getAllAds(function(response) {
		$scope.data = response;
		$scope.adsLoaded = true;	
	});

	serviceHandler.getAllCategories(function(response) {
		$scope.categories = response;
	});

	serviceHandler.getAllTowns(function(response) {
		$scope.towns = response;
		// $scope.towns = townsService.getTowns();
	});
	
	// $scope.towns = townsService.getTowns();

	$scope.takeCategoryId = function(id) {
		$scope.itemId = id;
		console.log(self.itemId);

		serviceHandler.getCategoryAds(id, function(response) {
			$scope.data = response;
		});
	};

	$scope.takeTownId = function(id) {
		$scope.itemId = id;
		console.log($scope.itemId);

		serviceHandler.getTownAds(id, function(response) {
			$scope.data = response;
		});
	};
}]);
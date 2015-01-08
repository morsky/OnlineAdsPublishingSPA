app.controller('ShowAdsController', ['$scope', '$log', 'adsServices',
	function($scope, $log, adsServices) {
	
	$scope.headerTitle = 'Home';
	$scope.adsLoaded = false;

	adsServices.getAds(function(response) {
		$scope.data = response;
		$scope.adsLoaded = true;	
	});

	adsServices.getCategories(function(response) {
		$scope.categories = response;
	});

	adsServices.getTowns(function(response) {
		$scope.towns = response;
	});

	// $scope.takeCategoryId = function(id) {
	// 	$scope.itemId = id;
	// 	console.log(self.itemId);

	// 	adsServices.getCategoryAds(id, function(response) {
	// 		$scope.data = response;
	// 	});
	// };

	// $scope.takeTownId = function(id) {
	// 	$scope.itemId = id;
	// 	console.log($scope.itemId);

	// 	adsServices.getTownAds(id, function(response) {
	// 		$scope.data = response;
	// 	});
	// };
}]);
app.directive('categories', [function() {
	return {
		// controller: 'ShowAdsController',
		restrict: 'E',
		templateUrl: 'partials/public/categories-sidebar.html',
		replace: true,
	};
}]);
app.directive('categories', [function() {
	return {
		controller: 'ListAds',
		restrict: 'E',
		templateUrl: 'partials/public/categories-sidebar.html',
		replace: true,
	};
}]);
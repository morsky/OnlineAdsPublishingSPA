app.directive('categories', [function() {
	return {
		controller: 'ListAds as allAds',
		restrict: 'E',
		templateUrl: 'partials/public/categories-sidebar.html',
		replace: true,
	};
}]);
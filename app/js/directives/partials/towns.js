app.directive('towns', [function() {
	return {
		controller: 'ListAds',
		restrict: 'E',
		templateUrl: 'partials/public/towns-sidebar.html',
		replace: true,
	};
}]);
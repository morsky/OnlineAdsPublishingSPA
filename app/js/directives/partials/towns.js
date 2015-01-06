app.directive('towns', [function() {
	return {
		controller: 'ListAds as allAds',
		restrict: 'E',
		templateUrl: 'partials/public/towns-sidebar.html',
		replace: true,
	};
}]);
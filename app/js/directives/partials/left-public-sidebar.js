app.directive('leftPublicSidebar', [function() {
	return {
		controller: 'ListAds',
		restrict: 'E',
		templateUrl: 'partials/public/left-sidebar.html',
		replace: true,
	};
}]);
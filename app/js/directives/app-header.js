app.directive('appHeader', [function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/app-header.html',
		replace: true,
	};
}]);
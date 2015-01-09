app.directive('loginForm', [function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/user/login-form.html',
		replace: true,
	};
}]);
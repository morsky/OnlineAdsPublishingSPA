app.directive('registerForm', [function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/user/register-form.html',
		replace: true,
	};
}]);
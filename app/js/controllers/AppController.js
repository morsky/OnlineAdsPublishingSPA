app.controller('AppController', ['$scope', '$route', 'authServices', 'notifyServices',
	function($scope, $route, authServices, notifyServices) {
		$scope.authServices = authServices;

		$scope.logout = function() {
			authServices.logout();
			notifyServices.showSuccess("Logout successful");
			// $location.path('/');
			$route.reload();
		};
	}
]);
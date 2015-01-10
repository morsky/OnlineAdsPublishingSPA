app.controller('LoginController', ['$scope', '$location', 'authServices', 'notifyServices',
	function($scope, $location, authServices, notifyServices) {
	
		$scope.headerTitle = 'Login';
		$scope.hide = true;

		$scope.submit = function(userData) {
			var userData = $scope.user;
			console.log(userData);

			authServices.login(userData,
				function success() {
					notifyServices.showSuccess('Login successfull');
					$location.path('/');
				},
				function error(err) {
					notifyServices.showError('Login failed!!', err);
				}
			);
		}
	}
]);
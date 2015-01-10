app.controller('RegisterController', ['$scope', '$location', 'authServices', 'notifyServices', 'adsServices',
	function($scope, $location, authServices, notifyServices, adsServices) {
	
		$scope.headerTitle = 'Register';
		$scope.hide = true;

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});

		$scope.submit = function(userData) {
			var userData = $scope.user;
			console.log(userData);

			authServices.register(userData,
				function success() {
					notifyServices.showSuccess('Registration successfull');
					$location.path('/login');
				},
				function error(err) {
					notifyServices.showError('Registration failed!!', err);
				}
			);
		}
	}
]);
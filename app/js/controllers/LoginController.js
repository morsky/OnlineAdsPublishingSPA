app.controller('LoginController', ['$scope', '$http', '$log', function($scope, $http, $log) {
	$scope.headerTitle = 'Login';

	$scope.submit = function() {
		console.log($scope.user);

		$http({method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/login',
			data: $scope.user
		})
		.success(function(data) {
			$log.log(data);
			sessionStorage.setItem('userTolken', data.access_token);
		})
		.error(function(data, status) {
			$log.warn(data);
		})
	}
}]);
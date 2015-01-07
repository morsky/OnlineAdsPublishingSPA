app.controller('RegisterController', ['$scope', '$http', '$log', 'serviceHandler', function($scope, $http, $log, serviceHandler) {
	$scope.headerTitle = 'Registration';

	serviceHandler.getAllTowns(function(response) {
		$scope.towns = response;
	});

	$scope.submit = function() {
		$log.log($scope.user);

		$http({method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/register',
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
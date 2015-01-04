app.controller('RegisterController', ['$http', '$log', 'serviceHandler', function($http, $log, serviceHandler) {
	var self = this;

	self.headerTitle = 'Registration';

	serviceHandler.getAllTowns(function(response) {
		self.towns = response;
	});

	self.submit = function() {
		$log.log(self.user);

		$http({method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/register',
			data: self.user
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
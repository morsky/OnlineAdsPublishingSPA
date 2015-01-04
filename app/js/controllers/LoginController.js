app.controller('LoginController', ['$http', '$log', function($http, $log) {
	var self = this;

	self.headerTitle = 'Login';

	self.submit = function() {
		console.log(self.user);

		$http({method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/login',
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
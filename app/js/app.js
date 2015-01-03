var app = angular.module('mySPAProject', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'partials/baseHomeScreen.html'
		})
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/register', {
			templateUrl: 'partials/register.html'
		})
		.otherwise({redirectTo: '/'});
	}]);
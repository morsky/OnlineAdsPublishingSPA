var app = angular.module('mySPAProject', ['ngRoute'])

// app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
 app.constant('baseUrl', 'http://localhost:1337/api/');

app.config(['$routeProvider', function($routeProvider) {
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